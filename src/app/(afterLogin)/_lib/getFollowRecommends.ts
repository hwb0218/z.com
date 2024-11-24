import { QUERY_KEYS } from "@/constants/queryKeys";

export async function getFollowRecommends() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/followRecommends`, {
    next: {
      tags: [...QUERY_KEYS.USERS.FOLLOW_RECOMMENDS()]
    },
    credentials: "include",
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
