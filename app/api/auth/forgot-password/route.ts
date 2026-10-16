import { isSameOriginRequest } from "@/app/lib/firebase/auth-session";

export const runtime = "nodejs";

interface FirebaseErrorResponse {
  error?: { message?: string };
}

function errorCode(error: FirebaseErrorResponse): string {
  return error.error?.message?.split(" ")[0] ?? "";
}

function resetSuccessResponse() {
  return Response.json(
    {
      success: true,
      message:
        "If an account exists for that email, a password reset link is on its way.",
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return Response.json({ message: "Request origin is not allowed." }, { status: 403 });
  }

  let body: { email?: unknown };
  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return Response.json(
      { message: "Enter a valid email address." },
      { status: 400 },
    );
  }

  const projectId = process.env.AUTH_FIREBASE_PROJECT_ID?.trim();
  const apiKey = process.env.AUTH_FIREBASE_WEB_API_KEY?.trim();
  if (!projectId || !apiKey) {
    return Response.json(
      { message: "Password reset is not configured yet. Contact your administrator." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  let response: Response;
  try {
    response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requestType: "PASSWORD_RESET", email }),
        cache: "no-store",
      },
    );
  } catch {
    return Response.json(
      { message: "Password reset is temporarily unavailable. Please try again." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  if (response.ok) return resetSuccessResponse();

  let code = "";
  try {
    code = errorCode((await response.json()) as FirebaseErrorResponse);
  } catch {
    // Continue with a generic error for an unexpected provider response.
  }

  if (["EMAIL_NOT_FOUND", "USER_NOT_FOUND"].includes(code)) {
    return resetSuccessResponse();
  }

  if (code === "TOO_MANY_ATTEMPTS_TRY_LATER") {
    return Response.json(
      { message: "Too many requests. Please wait a little and try again." },
      { status: 429, headers: { "Cache-Control": "no-store" } },
    );
  }

  return Response.json(
    { message: "Password reset is temporarily unavailable. Please try again." },
    { status: 503, headers: { "Cache-Control": "no-store" } },
  );
}
