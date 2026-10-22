import {
  FirebaseConfigurationError,
  firebaseIsConfigured,
  getClientAgreementFinancials,
  listClients,
} from "@/app/lib/firebase/firestore-rest";
import { isSameOriginRequest } from "@/app/lib/security/request-origin";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  if (!firebaseIsConfigured()) {
    return Response.json({ clients: [], configured: false });
  }

  try {
    const clients = await listClients();
    return Response.json({ clients, configured: true });
  } catch (error) {
    console.error("[Service Agreement] Could not load Firestore clients:", error);

    return Response.json(
      {
        message:
          error instanceof FirebaseConfigurationError
            ? error.message
            : "Could not load clients from Firestore. Check the server configuration.",
      },
      { status: 503 },
    );
  }
}

export async function POST(request: Request) {
  if (!isSameOriginRequest(request)) {
    return Response.json({ message: "Request origin is not allowed." }, { status: 403 });
  }

  if (!firebaseIsConfigured()) {
    return Response.json({ message: "Firebase is not configured." }, { status: 503 });
  }

  try {
    const body = (await request.json()) as { clientId?: unknown };
    const clientId = typeof body.clientId === "string" ? body.clientId.trim() : "";

    if (!clientId || clientId.length > 256) {
      return Response.json({ message: "A valid client ID is required." }, { status: 400 });
    }

    const financials = await getClientAgreementFinancials(clientId);
    return Response.json({ financials });
  } catch (error) {
    console.error("[Service Agreement] Could not load selected client financials:", error);

    return Response.json(
      {
        message:
          error instanceof FirebaseConfigurationError
            ? error.message
            : error instanceof Error
              ? error.message
              : "Could not load selected client details from Firestore.",
      },
      { status: 503 },
    );
  }
}
