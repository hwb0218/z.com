"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import Post from "@/app/(afterLogin)/_component/post/Post";

import { getSinglePost } from "../../_lib/getSinglePost";

import { Post as IPost } from "@/types/post";

interface Props {
  id: string;
  noImage?: boolean;
}

export default function SinglePost({ id, noImage }: Props) {
  const { data: post, error } = useQuery<IPost, NonNullable<unknown>, IPost, [_1: string, _2: string]>({
    queryKey: ["posts", id],
    queryFn: getSinglePost,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000
  });

  if (error) {
    return (
      <div
        style={{
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 31,
          fontWeight: "bold"
        }}
      >
        게시글을 찾을 수 없습니다.
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return <Post post={post} noImage={noImage} />;
}
