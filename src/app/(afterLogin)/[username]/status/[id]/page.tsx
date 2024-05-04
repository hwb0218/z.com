import React from "react";

import BackButton from "@/app/(afterLogin)/_component/back-button/BackButton";
import Post from "@/app/(afterLogin)/_component/post/Post";

import styles from "./singlePost.module.css";
import CommentForm from "./_component/comment-form/CommentForm";

export default function Page() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>게시하기</h3>
      </div>
      <Post />
      <CommentForm />
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
