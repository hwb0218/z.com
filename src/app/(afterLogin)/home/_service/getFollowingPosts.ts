import { QUERY_KEYS } from "@/constants/queryKeys";

export async function getFollowingPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/followingPosts`, {
    next: {
      tags: [...QUERY_KEYS.POSTS.FOLLOWINGS()]
    },
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
