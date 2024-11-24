"use client";
import { Fragment } from "react";
import { InfiniteData, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

import Post from "@/app/(afterLogin)/_component/post/Post";

import { getPostRecommends } from "@/app/(afterLogin)/home/_service/getPostRecommends";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { type Post as IPost } from "@/types/post";

type QueryKeys = typeof QUERY_KEYS;
type PostRecommendsKeys = QueryKeys["POSTS"]["RECOMMENDS"] extends () => infer R ? R : never;

export default function PostRecommends() {
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery<
    IPost[],
    NonNullable<unknown>,
    InfiniteData<IPost[]>,
    PostRecommendsKeys,
    number
  >({
    queryKey: QUERY_KEYS.POSTS.RECOMMENDS(),
    queryFn: getPostRecommends,
    initialPageParam: 0,
    getNextPageParam: lastPage => lastPage.at(-1)?.postId,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });

  const { ref } = useInView({
    threshold: 0.3,
    onChange: inView => {
      if (inView && hasNextPage && !isFetching) {
        fetchNextPage();
      }
    }
  });

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map(post => (
            <Post key={post.postId} post={post} />
          ))}
        </Fragment>
      ))}
      <div ref={ref} />
    </>
  );
}
