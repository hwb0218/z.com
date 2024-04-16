import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
}
