import { createSign } from "node:crypto";

import {
  calculateAge,
  getTodayDateString,
  isValidIsoDate,
} from "@/app/lib/validation/dates";
import type { AgreementClient } from "@/app/types/agreement-client";

const TOKEN_URL = "https://oauth2.googleapis.com/token";
const FIRESTORE_SCOPE = "https://www.googleapis.com/auth/datastore";
const FIRESTORE_ROOT = "https://firestore.googleapis.com/v1";

type FirestoreValue =
  | { stringValue: string }
  | { integerValue: string }
  | { doubleValue: number }
  | { booleanValue: boolean }
  | { timestampValue: string }
  | { nullValue: "NULL_VALUE" }
  | { mapValue: { fields?: Record<string, FirestoreValue> } }
  | { arrayValue: { values?: FirestoreValue[] } };

interface FirestoreDocument {
  name: string;
  updateTime?: string;
  fields?: Record<string, FirestoreValue>;
}

interface FirestoreListResponse {
  documents?: FirestoreDocument[];
  nextPageToken?: string;
}

interface GoogleTokenResponse {
  access_token: string;
  expires_in: number;
}

interface FirestoreConfig {
  projectId: string;
  clientEmail: string;
  privateKey: string;
  collection: string;
  database: string;
  fields: {
    name: string;
    dateOfBirth: string;
    address: string;
    phone: string;
    email: string;
    role: string;
    agentName: string;
    agreementCreated: string;
    utr: string;
    netPremium: string;
    gst: string;
    grossPremium: string;
  };
}

let cachedAccessToken: { value: string; expiresAt: number } | undefined;

export class FirebaseConfigurationError extends Error {}

function getConfig(): FirestoreConfig {
  const projectId = process.env.FIREBASE_PROJECT_ID?.trim();
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL?.trim();
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n").trim();

  if (!projectId || !clientEmail || !privateKey) {
    throw new FirebaseConfigurationError(
      "Firebase is not configured. Add the server-side Firebase variables to the environment.",
    );
  }

  const fields = {
    name: process.env.FIRESTORE_CLIENT_NAME_FIELD?.trim() || "customerName",
    dateOfBirth:
      process.env.FIRESTORE_CLIENT_DOB_FIELD?.trim() || "dateOfBirth",
    address: process.env.FIRESTORE_CLIENT_ADDRESS_FIELD?.trim() || "address",
    phone: process.env.FIRESTORE_CLIENT_PHONE_FIELD?.trim() || "phoneNumber",
    email: process.env.FIRESTORE_CLIENT_EMAIL_FIELD?.trim() || "email",
    role: process.env.FIRESTORE_CLIENT_ROLE_FIELD?.trim() || "role",
    agentName: process.env.FIRESTORE_CLIENT_AGENT_NAME_FIELD?.trim() || "agentName",
    agreementCreated:
      process.env.FIRESTORE_CLIENT_AGREEMENT_CREATED_FIELD?.trim() ||
      "serviceAgreementCreated",
    utr: process.env.FIRESTORE_CLIENT_UTR_FIELD?.trim() || "transactionIds",
    netPremium:
      process.env.FIRESTORE_CLIENT_NET_PREMIUM_FIELD?.trim() ||
      "premium.totalPremium",
    gst: process.env.FIRESTORE_CLIENT_GST_FIELD?.trim() || "premium.gstAmount",
    grossPremium:
      process.env.FIRESTORE_CLIENT_GROSS_PREMIUM_FIELD?.trim() ||
      "premium.grossPremium",
  };

  const simpleField = /^[A-Za-z_][A-Za-z0-9_]*$/;
  const fieldPath = /^[A-Za-z_][A-Za-z0-9_]*(?: [A-Za-z0-9_]+)*(?:\.[A-Za-z_][A-Za-z0-9_]*(?: [A-Za-z0-9_]+)*)*$/;
  const invalidField = Object.entries(fields).some(([key, field]) =>
    key === "agreementCreated" ? !simpleField.test(field) : !fieldPath.test(field),
  );

  if (invalidField) {
    throw new FirebaseConfigurationError(
      "Firestore field mappings must use dot-separated field names containing letters, digits, underscores, and spaces. The completion field must be a simple top-level field name.",
    );
  }

  const collection =
    process.env.FIRESTORE_CLIENTS_COLLECTION?.trim() || "users";

  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(collection)) {
    throw new FirebaseConfigurationError(
      "FIRESTORE_CLIENTS_COLLECTION must be a top-level collection name.",
    );
  }

  return {
    projectId,
    clientEmail,
    privateKey,
    collection,
    database: process.env.FIRESTORE_DATABASE_ID?.trim() || "(default)",
    fields,
  };
}

function base64Url(value: string | Buffer): string {
  return Buffer.from(value).toString("base64url");
}

async function getAccessToken(config: FirestoreConfig): Promise<string> {
  if (cachedAccessToken && cachedAccessToken.expiresAt > Date.now() + 60_000) {
    return cachedAccessToken.value;
  }

  const issuedAt = Math.floor(Date.now() / 1000);
  const header = base64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = base64Url(
    JSON.stringify({
      iss: config.clientEmail,
      scope: FIRESTORE_SCOPE,
      aud: TOKEN_URL,
      iat: issuedAt,
      exp: issuedAt + 3600,
    }),
  );
  const signingInput = `${header}.${claims}`;
  const signer = createSign("RSA-SHA256");
  signer.update(signingInput);
  signer.end();
  const assertion = `${signingInput}.${signer.sign(config.privateKey, "base64url")}`;

  const tokenResponse = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
    cache: "no-store",
  });

  if (!tokenResponse.ok) {
    throw new Error(
      "Firebase authentication failed. Check the service account environment variables.",
    );
  }

  const token = (await tokenResponse.json()) as GoogleTokenResponse;
  cachedAccessToken = {
    value: token.access_token,
    expiresAt: Date.now() + token.expires_in * 1000,
  };

  return token.access_token;
}

function documentCollectionUrl(config: FirestoreConfig): string {
  return `${FIRESTORE_ROOT}/projects/${encodeURIComponent(config.projectId)}/databases/${encodeURIComponent(config.database)}/documents/${encodeURIComponent(config.collection)}`;
}

function firestoreFieldPath(fieldPath: string): string {
  return fieldPath
    .split(".")
    .map((segment) =>
      /^[A-Za-z_][A-Za-z0-9_]*$/.test(segment)
        ? segment
        : `\`${segment.replace(/\\/g, "\\\\").replace(/`/g, "\\`")}\``,
    )
    .join(".");
}

function documentsUrl(config: FirestoreConfig, documentId: string): string {
  return `${documentCollectionUrl(config)}/${encodeURIComponent(documentId)}`;
}

function readValue(value: FirestoreValue | undefined): unknown {

  if (!value) return undefined;
  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return value.integerValue;
  if ("doubleValue" in value) return value.doubleValue;
  if ("booleanValue" in value) return value.booleanValue;
  if ("timestampValue" in value) return value.timestampValue;
  if ("nullValue" in value) return null;
  if ("mapValue" in value) return value.mapValue.fields ?? {};
  if ("arrayValue" in value) {
    return (value.arrayValue.values ?? []).map(readValue);
  }

  return undefined;
}

function readField(
  fields: Record<string, FirestoreValue> | undefined,
  fieldPath: string,
): unknown {
  const segments = fieldPath.split(".");
  let currentFields = fields;
  let currentValue: FirestoreValue | undefined;

  for (const [index, segment] of segments.entries()) {
    currentValue = currentFields?.[segment];
    if (!currentValue) return undefined;

    if (index < segments.length - 1) {
      currentFields =
        "mapValue" in currentValue ? currentValue.mapValue.fields : undefined;
    }
  }

  return readValue(currentValue);
}

function asString(value: unknown): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return "";
}

function firstArrayString(value: unknown): string {
  return Array.isArray(value) ? asString(value[0]).trim() : asString(value).trim();
}

function amountString(value: unknown): string {
  const text = asString(value).trim();
  const normalized = text.replace(/[₹,\s]/g, "");

  if (!normalized) return "";

  const amount = Number(normalized);
  return Number.isFinite(amount) ? amount.toFixed(2) : text;
}

function isoDate(value: unknown): string {
  const text = asString(value).trim();

  if (/^\d{4}-\d{2}-\d{2}/.test(text)) return text.slice(0, 10);

  const indianDate = /^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/.exec(text);
  if (indianDate) {
    const [, day, month, year] = indianDate;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  return text;
}

function toAgreementClient(
  document: FirestoreDocument,
  config: FirestoreConfig,
): AgreementClient | null {
  const fields = document.fields;
  const id = document.name.split("/").at(-1) ?? "";
  const name = asString(readField(fields, config.fields.name)).trim();
  const dateOfBirth = isoDate(readField(fields, config.fields.dateOfBirth));

  if (!id || !name) return null;

  return {
    id,
    name,
    age:
      dateOfBirth && isValidIsoDate(dateOfBirth)
        ? String(calculateAge(dateOfBirth, getTodayDateString()))
        : "",
    dateOfBirth,
    address: asString(readField(fields, config.fields.address)),
    phone: asString(readField(fields, config.fields.phone))
      .replace(/\D/g, "")
      .slice(-10),
    email: asString(readField(fields, config.fields.email)).trim(),
    agentName: asString(readField(fields, config.fields.agentName)).trim(),
    utr: "",
    netPremium: "",
    gst: "",
    grossPremium: "",
  };
}

async function firestoreFetch<T>(
  config: FirestoreConfig,
  path: string,
  init: RequestInit = {},
): Promise<T> {
  const accessToken = await getAccessToken(config);
  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${accessToken}`);
  headers.set("Content-Type", "application/json");
  const response = await fetch(path, {
    ...init,
    headers,
    cache: "no-store",
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("The selected client no longer exists in Firestore.");
    }
    throw new Error(
      "Firestore request failed. Check the collection, field mappings, and service account access.",
    );
  }

  return (await response.json()) as T;
}

export async function listClients(): Promise<AgreementClient[]> {
  const config = getConfig();
  const selectedFields = [
    config.fields.name,
    config.fields.dateOfBirth,
    config.fields.address,
    config.fields.phone,
    config.fields.email,
    config.fields.role,
    config.fields.agentName,
  ];
  const uniqueFields = [...new Set(selectedFields)];
  const documents: FirestoreDocument[] = [];
  let pageToken: string | undefined;

  do {
    const url = new URL(documentCollectionUrl(config));
    url.searchParams.set("pageSize", "1000");
    for (const field of uniqueFields) {
      url.searchParams.append("mask.fieldPaths", firestoreFieldPath(field));
    }
    if (pageToken) url.searchParams.set("pageToken", pageToken);

    const result = await firestoreFetch<FirestoreListResponse>(
      config,
      url.toString(),
    );
    documents.push(...(result.documents ?? []));
    pageToken = result.nextPageToken;
  } while (pageToken);

  return documents
    .filter(
      (document) =>
        asString(readField(document.fields, config.fields.role))
          .trim()
          .toLocaleLowerCase() === "client",
    )
    .map((document) => toAgreementClient(document, config))
    .filter((client): client is AgreementClient => client !== null)
    .sort((left, right) => left.name.localeCompare(right.name));
}

export async function getClientAgreementFinancials(
  clientId: string,
): Promise<Pick<AgreementClient, "utr" | "netPremium" | "gst" | "grossPremium">> {
  const config = getConfig();
  const url = new URL(documentsUrl(config, clientId));
  const selectedFields = [
    config.fields.role,
    config.fields.utr,
    config.fields.netPremium,
    config.fields.gst,
    config.fields.grossPremium,
  ];

  for (const field of selectedFields) {
    url.searchParams.append("mask.fieldPaths", firestoreFieldPath(field));
  }

  const document = await firestoreFetch<FirestoreDocument>(config, url.toString());
  const role = asString(readField(document.fields, config.fields.role))
    .trim()
    .toLocaleLowerCase();

  if (role !== "client") {
    throw new Error("The selected Firestore record is not a client.");
  }

  return {
    utr: firstArrayString(readField(document.fields, config.fields.utr)),
    netPremium: amountString(readField(document.fields, config.fields.netPremium)),
    gst: amountString(readField(document.fields, config.fields.gst)),
    grossPremium: amountString(readField(document.fields, config.fields.grossPremium)),
  };
}

export async function markClientAgreementCreated(clientId: string): Promise<void> {
  const config = getConfig();
  const accessToken = await getAccessToken(config);
  const clientUrl = documentsUrl(config, clientId);
  const existingUrl = new URL(clientUrl);
  existingUrl.searchParams.append("mask.fieldPaths", config.fields.agreementCreated);
  const existing = await firestoreFetch<FirestoreDocument>(
    config,
    existingUrl.toString(),
  );
  if (readField(existing.fields, config.fields.agreementCreated) === true) {
    return;
  }

  const patchUrl = new URL(clientUrl);
  patchUrl.searchParams.append(
    "updateMask.fieldPaths",
    config.fields.agreementCreated,
  );
  if (existing.updateTime) {
    patchUrl.searchParams.set(
      "currentDocument.updateTime",
      existing.updateTime,
    );
  }

  const response = await fetch(patchUrl, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: existing.name,
      fields: {
        [config.fields.agreementCreated]: { booleanValue: true },
      },
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not save the completed agreement status to Firestore.");
  }
}

export function firebaseIsConfigured(): boolean {
  return Boolean(
    process.env.FIREBASE_PROJECT_ID &&
      process.env.FIREBASE_CLIENT_EMAIL &&
      process.env.FIREBASE_PRIVATE_KEY,
  );
}
