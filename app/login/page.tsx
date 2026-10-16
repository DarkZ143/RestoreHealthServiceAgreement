import { redirect } from "next/navigation";

import LoginPanel from "@/app/components/auth/LoginPanel";
import { getCurrentSession } from "@/app/lib/firebase/auth-session";

export default async function LoginPage() {
  const session = await getCurrentSession();
  if (session) redirect("/operations/service-agreement");

  return <LoginPanel />;
}
