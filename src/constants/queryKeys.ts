export const QUERY_KEYS = {
  POSTS: {
    BASE: ["posts"] as const,
    RECOMMENDS: () => [...QUERY_KEYS.POSTS.BASE, "recommends"] as const
  }
};
