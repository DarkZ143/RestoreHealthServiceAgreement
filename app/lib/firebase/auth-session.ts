import { createSign, createVerify } from "node:crypto";

import { cookies } from "next/headers";

export const AUTH_SESSION_COOKIE = "rhs_session";
export const AUTH_SESSION_SECONDS = 60 * 60 * 8;

const GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token";
const IDENTITY_TOOLKIT_SCOPE = "https://www.googleapis.com/auth/identitytoolkit";
const FIREBASE_AUTH_ROOT = "https://identitytoolkit.googleapis.com/v1";
const SESSION_COOKIE_KEYS_URL =
  "https://www.googleapis.com/identitytoolkit/v3/relyingparty/publicKeys";

export interface AuthSession {
  uid: string;
  email: string;
}

interface FirebaseAuthConfig {
  projectId: string;
  apiKey: string;
  clientEmail: string;
  privateKey: string;
}

interface FirebaseSessionClaims {
  aud?: unknown;
  auth_time?: unknown;
  email?: unknown;
  exp?: unknown;
  iat?: unknown;
  iss?: unknown;
  sub?: unknown;
}

interface GoogleTokenResponse {
  access_token: string;
  expires_in: number;
}

interface FirebaseSessionResponse {
  sessionCookie?: string;
}

interface SessionPublicKeyCache {
  keys: Record<string, string>;
  expiresAt: number;
}

export class FirebaseAuthConfigurationError extends Error {}
export class FirebaseCredentialsError extends Error {}

let cachedGoogleToken: { value: string; expiresAt: number } | undefined;
let cachedPublicKeys: SessionPublicKeyCache | undefined;

function getProjectId(): string {
  const projectId = process.env.AUTH_FIREBASE_PROJECT_ID?.trim();

  if (!projectId) {
    throw new FirebaseAuthConfigurationError(
      "AUTH_FIREBASE_PROJECT_ID is not configured.",
    );
  }

  return projectId;
}

function getAuthApiConfig(): Pick<FirebaseAuthConfig, "projectId" | "apiKey"> {
  const projectId = getProjectId();
  const apiKey = process.env.AUTH_FIREBASE_WEB_API_KEY?.trim();

  if (!apiKey) {
    throw new FirebaseAuthConfigurationError(
      "AUTH_FIREBASE_WEB_API_KEY is not configured.",
    );
  }

  return { projectId, apiKey };
}

function getFirebaseAuthConfig(): FirebaseAuthConfig {
  const { projectId, apiKey } = getAuthApiConfig();
  const clientEmail = process.env.AUTH_FIREBASE_CLIENT_EMAIL?.trim();
  const privateKey = process.env.AUTH_FIREBASE_PRIVATE_KEY
    ?.replace(/\\n/g, "\n")
    .trim();

  if (!clientEmail || !privateKey) {
    throw new FirebaseAuthConfigurationError(
      "Firebase Authentication service account credentials are not configured.",
    );
  }

  return { projectId, apiKey, clientEmail, privateKey };
}

function base64Url(value: string | Buffer): string {
  return Buffer.from(value).toString("base64url");
}

async function getIdentityToolkitAccessToken(
  config: FirebaseAuthConfig,
): Promise<string> {
  if (cachedGoogleToken && cachedGoogleToken.expiresAt > Date.now() + 60_000) {
    return cachedGoogleToken.value;
  }

  const issuedAt = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(
    JSON.stringify({
      iss: config.clientEmail,
      scope: IDENTITY_TOOLKIT_SCOPE,
      aud: GOOGLE_TOKEN_URL,
      iat: issuedAt,
      exp: issuedAt + 3600,
    }),
  );
  const signingInput = `${header}.${claims}`;
  const signer = createSign("RSA-SHA256");
  signer.update(signingInput);
  signer.end();
  const assertion = `${signingInput}.${signer.sign(config.privateKey, "base64url")}`;

  const response = await fetch(GOOGLE_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new FirebaseAuthConfigurationError(
      "Could not authorize the Firebase service account for session cookies.",
    );
  }

  const token = (await response.json()) as GoogleTokenResponse;
  cachedGoogleToken = {
    value: token.access_token,
    expiresAt: Date.now() + token.expires_in * 1000,
  };

  return token.access_token;
}

function decodeJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const segments = token.split(".");
    if (segments.length !== 3) return null;
    return JSON.parse(Buffer.from(segments[1], "base64url").toString("utf8")) as Record<
      string,
      unknown
    >;
  } catch {
    return null;
  }
}

export async function createFirebaseSessionCookie(
  idToken: string,
): Promise<string> {
  const config = getFirebaseAuthConfig();
  const claims = decodeJwtPayload(idToken);
  const authTime = Number(claims?.auth_time);
  const now = Math.floor(Date.now() / 1000);

  if (!Number.isFinite(authTime) || now - authTime > 5 * 60 || authTime > now + 60) {
    throw new FirebaseCredentialsError("A fresh sign-in is required.");
  }

  const accessToken = await getIdentityToolkitAccessToken(config);
  const response = await fetch(
    `${FIREBASE_AUTH_ROOT}/projects/${encodeURIComponent(config.projectId)}:createSessionCookie`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idToken,
        validDuration: String(AUTH_SESSION_SECONDS),
      }),
      cache: "no-store",
    },
  );

  if (!response.ok) {
    throw new FirebaseAuthConfigurationError(
      "Firebase could not create a session cookie. Check the service account permissions.",
    );
  }

  const result = (await response.json()) as FirebaseSessionResponse;
  if (!result.sessionCookie) {
    throw new FirebaseAuthConfigurationError(
      "Firebase did not return a session cookie.",
    );
  }

  return result.sessionCookie;
}

async function loadSessionPublicKeys(
  forceRefresh = false,
): Promise<Record<string, string>> {
  if (
    !forceRefresh &&
    cachedPublicKeys &&
    cachedPublicKeys.expiresAt > Date.now()
  ) {
    return cachedPublicKeys.keys;
  }

  const response = await fetch(SESSION_COOKIE_KEYS_URL, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Could not load Firebase session verification keys.");
  }

  const keys = (await response.json()) as Record<string, string>;
  const maxAge = /max-age=(\d+)/i.exec(response.headers.get("cache-control") ?? "");
  const cacheMilliseconds = maxAge ? Number(maxAge[1]) * 1000 : 60 * 60 * 1000;
  cachedPublicKeys = {
    keys,
    expiresAt: Date.now() + Math.max(cacheMilliseconds, 60_000),
  };

  return keys;
}

function parseClaims(value: string): FirebaseSessionClaims | null {
  try {
    return JSON.parse(value) as FirebaseSessionClaims;
  } catch {
    return null;
  }
}

function parseObject(value: string): Record<string, unknown> | null {
  try {
    const parsed: unknown = JSON.parse(value);
    return parsed && typeof parsed === "object"
      ? (parsed as Record<string, unknown>)
      : null;
  } catch {
    return null;
  }
}

function claimsAreValid(
  claims: FirebaseSessionClaims | null,
  projectId: string,
): claims is FirebaseSessionClaims & { sub: string; email: string } {
  if (!claims) return false;

  const now = Math.floor(Date.now() / 1000);
  const issuedAt = Number(claims.iat);
  const expiresAt = Number(claims.exp);
  const authTime = Number(claims.auth_time);

  return (
    claims.aud === projectId &&
    claims.iss === `https://session.firebase.google.com/${projectId}` &&
    typeof claims.sub === "string" &&
    claims.sub.length > 0 &&
    claims.sub.length <= 128 &&
    typeof claims.email === "string" &&
    claims.email.length > 0 &&
    Number.isFinite(issuedAt) &&
    issuedAt <= now + 60 &&
    Number.isFinite(expiresAt) &&
    expiresAt > now &&
    expiresAt - issuedAt <= AUTH_SESSION_SECONDS + 60 &&
    Number.isFinite(authTime) &&
    authTime > 0 &&
    authTime <= now + 60
  );
}

async function verifySessionCookie(
  token: string,
  projectId: string,
  forceRefresh = false,
): Promise<AuthSession | null> {
  const parts = token.split(".");
  if (parts.length !== 3) return null;

  const [encodedHeader, encodedClaims, encodedSignature] = parts;
  const header = parseObject(
    Buffer.from(encodedHeader, "base64url").toString("utf8"),
  );
  const keyId = header?.kid;

  if (
    header?.alg !== "RS256" ||
    typeof keyId !== "string"
  ) {
    return null;
  }

  const keys = await loadSessionPublicKeys(forceRefresh);
  const publicKey = keys[keyId];

  if (!publicKey) {
    if (forceRefresh) return null;
    return verifySessionCookie(token, projectId, true);
  }

  const verifier = createVerify("RSA-SHA256");
  verifier.update(`${encodedHeader}.${encodedClaims}`);
  verifier.end();

  let signatureIsValid = false;
  try {
    signatureIsValid = verifier.verify(
      publicKey,
      Buffer.from(encodedSignature, "base64url"),
    );
  } catch {
    return null;
  }

  if (!signatureIsValid) return null;

  const claims = parseClaims(
    Buffer.from(encodedClaims, "base64url").toString("utf8"),
  );
  if (!claimsAreValid(claims, projectId)) return null;

  return { uid: claims.sub, email: claims.email };
}

export async function getSessionFromCookie(
  token: string | undefined,
): Promise<AuthSession | null> {
  if (!token) return null;

  try {
    return await verifySessionCookie(token, getProjectId());
  } catch {
    return null;
  }
}

export async function getCurrentSession(): Promise<AuthSession | null> {
  const cookieStore = await cookies();
  return getSessionFromCookie(cookieStore.get(AUTH_SESSION_COOKIE)?.value);
}

export async function getSessionForRequest(
  request: Request,
): Promise<AuthSession | null> {
  const cookieHeader = request.headers.get("cookie") ?? "";
  const sessionCookie = cookieHeader
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${AUTH_SESSION_COOKIE}=`))
    ?.slice(AUTH_SESSION_COOKIE.length + 1);

  return getSessionFromCookie(sessionCookie);
}

export function isSameOriginRequest(request: Request): boolean {
  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get("origin");

  if (origin) return origin === requestOrigin;

  const referer = request.headers.get("referer");
  if (!referer) return false;

  try {
    return new URL(referer).origin === requestOrigin;
  } catch {
    return false;
  }
}

export async function requireApiSession(
  request: Request,
): Promise<Response | null> {
  const session = await getSessionForRequest(request);

  if (!session) {
    return Response.json(
      { message: "Your session has expired. Sign in again to continue." },
      { status: 401, headers: { "Cache-Control": "no-store" } },
    );
  }

  return null;
}

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: AUTH_SESSION_SECONDS,
  };
}
