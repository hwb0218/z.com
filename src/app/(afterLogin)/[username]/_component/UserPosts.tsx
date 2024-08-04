"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";

import Post from "@/app/(afterLogin)/_component/post/Post";

import { getUserPosts } from "../_lib/getUserPosts";

import { Post as IPost } from "@/types/post";

interface Props {
  username: string;
}

export default function UserPosts({ username }: Props) {
  const { data } = useQuery<IPost[], NonNullable<unknown>, IPost[], [_1: string, _2: string, _3: string]>({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000
  });
  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(["users", username]);

  if (!user) {
    return null;
  }

  return data?.map(post => <Post key={post.postId} post={post} />);
}
