"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import Post from "@/app/(afterLogin)/_component/post/Post";

import { getComments } from "../../_lib/getComments";

import { Post as IPost } from "@/types/post";

interface Props {
  id: string;
}

export default function Comments({ id }: Props) {
  const queryClient = useQueryClient();
  const post = queryClient.getQueryData(["posts", id]);
  const { data, error } = useQuery<IPost[], NonNullable<unknown>, IPost[], [_1: string, _2: string, _3: string]>({
    queryKey: ["posts", "comments", id],
    queryFn: getComments,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000,
    enabled: !!post
  });

  if (!post) {
    return null;
  }

  return data?.map(post => <Post key={post.postId} post={post} />);
}
