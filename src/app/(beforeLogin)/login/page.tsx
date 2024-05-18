import RedirectToLogin from "@/app/(beforeLogin)/login/_component/RedirectToLogin";
import Main from "@/app/(beforeLogin)/_component/main/Main";

export default function page() {
  return (
    <>
      <RedirectToLogin />
      <Main />
    </>
  );
}
