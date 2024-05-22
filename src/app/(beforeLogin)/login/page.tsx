"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Main from "@/app/(beforeLogin)/_component/main/Main";
// import RedirectToLogin from "@/app/(beforeLogin)/login/_component/RedirectToLogin";

export default function Page() {
  const router = useRouter();
  const { data: session } = useSession();

  if (session?.user) {
    router.replace("/home");
    return null;
  }

  router.replace("/i/flow/login");

  return <Main />;
}
