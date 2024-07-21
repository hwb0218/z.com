import { QUERY_KEYS } from "@/constants/queryKeys";

export async function getTrends() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/trends`, {
    next: {
      tags: [...QUERY_KEYS.TRENDS.BASE]
    },
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
