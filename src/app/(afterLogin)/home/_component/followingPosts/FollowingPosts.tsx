"use client";

import { useQuery } from "@tanstack/react-query";

import Post from "@/app/(afterLogin)/_component/post/Post";

import { getFollowingPosts } from "../../_service/getFollowingPosts";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { type Post as IPost } from "@/types/post";

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: QUERY_KEYS.POSTS.FOLLOWINGS(),
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });

  return data?.map(post => <Post key={post.postId} post={post} />);
}
