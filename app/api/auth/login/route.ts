import { NextResponse } from "next/server";

import {
  AUTH_SESSION_COOKIE,
  FirebaseAuthConfigurationError,
  createFirebaseSessionCookie,
  isSameOriginRequest,
  sessionCookieOptions,
} from "@/app/lib/firebase/auth-session";

export const runtime = "nodejs";

interface SignInResponse {
  email?: string;
  idToken?: string;
  localId?: string;
}

interface FirebaseErrorResponse {
  error?: { message?: string };
}

function errorCode(error: FirebaseErrorResponse): string {
  return error.error?.message?.split(" ")[0] ?? "";
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return Response.json({ message: "Request origin is not allowed." }, { status: 403 });
  }

  let body: { email?: unknown; password?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    email.length > 254 ||
    password.length === 0 ||
    password.length > 4096
  ) {
    return Response.json(
      { message: "Enter a valid email address and password." },
      { status: 400 },
    );
  }

  const apiKey = process.env.AUTH_FIREBASE_WEB_API_KEY?.trim();
  if (!process.env.AUTH_FIREBASE_PROJECT_ID?.trim() || !apiKey) {
    return Response.json(
      { message: "Sign-in is not configured yet. Contact your administrator." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  let signInResponse: Response;
  try {
    signInResponse = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, returnSecureToken: true }),
        cache: "no-store",
      },
    );
  } catch {
    return Response.json(
      { message: "Sign-in is temporarily unavailable. Please try again." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (!signInResponse.ok) {
    let code = "";
    try {
      code = errorCode((await signInResponse.json()) as FirebaseErrorResponse);
    } catch {
      // Keep the same response for all credential failures.
    }

    if (
      ["API_KEY_INVALID", "PROJECT_NOT_FOUND", "OPERATION_NOT_ALLOWED"].includes(
        code,
      )
    ) {
      return Response.json(
        { message: "Sign-in is not configured yet. Contact your administrator." },
        { status: 503, headers: { "Cache-Control": "no-store" } },
      );
    }

    return Response.json(
      { message: "Email or password is incorrect." },
      { status: 401, headers: { "Cache-Control": "no-store" } },
    );
  }

  const result = (await signInResponse.json()) as SignInResponse;
  if (!result.idToken || !result.localId || !result.email) {
    return Response.json(
      { message: "Sign-in is temporarily unavailable. Please try again." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const sessionCookie = await createFirebaseSessionCookie(result.idToken);
    const response = NextResponse.json(
      { success: true },
      { headers: { "Cache-Control": "no-store" } },
    );
    response.cookies.set(
      AUTH_SESSION_COOKIE,
      sessionCookie,
      sessionCookieOptions(),
    );
    return response;
  } catch (error) {
    if (error instanceof FirebaseAuthConfigurationError) {
      console.error("[Auth] Firebase session setup needs attention.");
    }

    return Response.json(
      { message: "Sign-in is temporarily unavailable. Please try again." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}
