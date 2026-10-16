import { NextResponse } from "next/server";

import {
  AUTH_SESSION_COOKIE,
  isSameOriginRequest,
  sessionCookieOptions,
} from "@/app/lib/firebase/auth-session";

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return Response.json({ message: "Request origin is not allowed." }, { status: 403 });
  }

  const response = NextResponse.json(
    { success: true },
    { headers: { "Cache-Control": "no-store" } },
  );
  response.cookies.set(AUTH_SESSION_COOKIE, "", {
    ...sessionCookieOptions(),
    maxAge: 0,
    expires: new Date(0),
  });
  return response;
}
