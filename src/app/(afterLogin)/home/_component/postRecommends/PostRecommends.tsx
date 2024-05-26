"use client";

import { useQuery } from "@tanstack/react-query";

import Post from "@/app/(afterLogin)/_component/post/Post";

import { getPostRecommends } from "@/app/(afterLogin)/home/_service";

import { QUERY_KEYS } from "@/constants/queryKeys";

export default function PostRecommends() {
  const { data } = useQuery({
    queryKey: QUERY_KEYS.POSTS.RECOMMENDS(),
    queryFn: getPostRecommends,
    staleTime: 60 * 1000
  });

  return data?.map(post => <Post key={post.postId} post={post} />);
}
