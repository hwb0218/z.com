"use client";

import { useQuery } from "@tanstack/react-query";

import Post from "../../_component/post/Post";

import { getSearchResult } from "../_service/getSearchResult";

import { Post as IPost } from "@/types/post";

interface Props {
  searchParams: { q: string; f?: string; pf?: string };
}

const SearchResult = ({ searchParams }: Props) => {
  const { data } = useQuery<IPost[], NonNullable<unknown>, IPost[], [_1: string, _2: string, Props["searchParams"]]>({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000
  });

  return data?.map(post => <Post key={post.postId} post={post} />);
};

export default SearchResult;
