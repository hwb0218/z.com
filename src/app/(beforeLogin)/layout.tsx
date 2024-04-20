import { PropsWithChildren, ReactNode } from "react";

import styles from "./layout.module.css";

interface Props {
  modal: ReactNode;
}

export default function Layout({ children, modal }: PropsWithChildren<Props>) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
