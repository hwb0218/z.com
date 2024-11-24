"use client";

import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

import styles from "./logoutButton.module.css";
import { Session } from "next-auth";

interface Props {
  me: Session | null;
}

export default function LogoutButton({ me }: Props) {
  const router = useRouter();
  // const { data: me } = useSession();

  const onLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.replace("/");
    } catch (err) {
      console.error(err);
    }
  };

  if (!me) {
    return null;
  }

  return (
    <button className={styles.logOutButton} onClick={onLogout}>
      <div className={styles.logOutUserImage}>
        <img src={me.user?.image as string} alt={me.user?.email as string} />
      </div>
      <div className={styles.logOutUserName}>
        <div>{me.user?.name}</div>
        <div>@{me.user?.email}</div>
      </div>
    </button>
  );
}
