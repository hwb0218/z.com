import { QUERY_KEYS } from "@/constants/queryKeys";

import type { Post } from "@/types/post";

export async function getPostRecommends(): Promise<Post[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/postRecommends`, {
    next: {
      tags: [...QUERY_KEYS.POSTS.RECOMMENDS()]
    },
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
