import { markClientAgreementCreated } from "@/app/lib/firebase/firestore-rest";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: { clientId?: unknown };

  try {
    body = (await request.json()) as typeof body;
  } catch {
    return Response.json({ message: "Invalid request body." }, { status: 400 });
  }

  if (
    typeof body.clientId !== "string" ||
    !body.clientId.trim()
  ) {
    return Response.json(
      { message: "Client is required." },
      { status: 400 },
    );
  }

  try {
    await markClientAgreementCreated(body.clientId);
    return Response.json({ success: true });
  } catch (error) {
    console.error("[Service Agreement] Could not mark client complete:", error);

    return Response.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Could not save the completed agreement status.",
      },
      { status: 503 },
    );
  }
}
