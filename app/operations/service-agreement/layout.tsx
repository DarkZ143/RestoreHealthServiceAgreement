import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { getCurrentSession } from "@/app/lib/firebase/auth-session";

export default async function ServiceAgreementLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getCurrentSession();
  if (!session) redirect("/login");

  return children;
}
