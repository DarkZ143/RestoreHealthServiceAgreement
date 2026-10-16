import { redirect } from "next/navigation";

import { getCurrentSession } from "@/app/lib/firebase/auth-session";

export default async function HomePage() {
  const session = await getCurrentSession();
  redirect(session ? "/operations/service-agreement" : "/login");
}
