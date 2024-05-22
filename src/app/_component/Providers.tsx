import { PropsWithChildren } from "react";

import AuthSession from "./AuthSession";

export default function Providers({ children }: PropsWithChildren) {
  return <AuthSession>{children}</AuthSession>;
}
