"use client";

import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

import styles from "./postArticle.module.css";

interface Props {
  post: {
    content: string;
    postId: number;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
}

export default function PostArticle({ children, post }: PropsWithChildren<Props>) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.User.id}/status/${post.postId}`);
  };

  return (
    <article onClickCapture={onClick} className={styles.post}>
      {children}
    </article>
  );
}
