import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <div>after login layout{children}</div>;
}
