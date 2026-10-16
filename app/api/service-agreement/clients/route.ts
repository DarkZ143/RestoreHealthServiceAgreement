import {
  FirebaseConfigurationError,
  firebaseIsConfigured,
  listClients,
} from "@/app/lib/firebase/firestore-rest";

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
