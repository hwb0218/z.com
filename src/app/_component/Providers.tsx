import { PropsWithChildren } from "react";

import AuthSessionProvider from "./AuthSession";
import RQProvider from "./RQProvider";

export default function Providers({ children }: PropsWithChildren) {
  return (
    <AuthSessionProvider>
      <RQProvider>{children}</RQProvider>
    </AuthSessionProvider>
  );
}
