"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import ActionButtons from "@/app/(afterLogin)/_component/action-buttons/ActionButtons";

import { Post as IPost } from "@/types/post";

import styles from "./ImageZone.module.css";
import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";

interface Props {
  id: string;
}

export default function ImageZone({ id }: Props) {
  const { data: post, error } = useQuery<IPost, NonNullable<unknown>, IPost, [_1: string, _2: string]>({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000
  });

  if (!post?.Images[0]) {
    return null;
  }

  return (
    <div className={styles.imageZone}>
      <img src={post.Images[0].link} alt={post.content} />
      <div className={styles.image} style={{ backgroundImage: `url(${post.Images[0].link})` }} />
      <div className={styles.buttonZone}>
        <div className={styles.buttonInner}>
          <ActionButtons white />
        </div>
      </div>
    </div>
  );
}
