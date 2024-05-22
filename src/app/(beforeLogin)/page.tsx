import { auth } from "@/auth";

import Main from "@/app/(beforeLogin)/_component/main/Main";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (session?.user) {
    return redirect("/home");
  }

  return <Main />;
}
