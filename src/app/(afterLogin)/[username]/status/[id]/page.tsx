import React from "react";

import BackButton from "@/app/(afterLogin)/_component/back-button/BackButton";

import styles from "./singlePost.module.css";
import CommentForm from "./_component/comment-form/CommentForm";
import SinglePost from "./_component/single-post/SinglePost";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getSinglePost } from "./_lib/getSinglePost";
import { getComments } from "./_lib/getComments";
import Comments from "./_component/comments/Comments";

interface Props {
  params: { id: string };
}

export default async function Page({ params }: Props) {
  const { id } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["post", id], queryFn: getSinglePost });
  await queryClient.prefetchQuery({ queryKey: ["posts", "comments", id], queryFn: getComments });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={styles.main}>
      <HydrationBoundary state={dehydratedState}>
        <div className={styles.header}>
          <BackButton />
          <h3 className={styles.headerTitle}>게시하기</h3>
        </div>
        <SinglePost id={id} />
        <CommentForm id={id} />
        <div>
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
