export const QUERY_KEYS = {
  POSTS: {
    BASE: ["posts"] as const,
    RECOMMENDS: () => [...QUERY_KEYS.POSTS.BASE, "recommends"] as const,
    FOLLOWINGS: () => [...QUERY_KEYS.POSTS.BASE, "followings"] as const
  },
  TRENDS: {
    BASE: ["trends"] as const
  },
  USERS: {
    BASE: ["users"] as const,
    FOLLOW_RECOMMENDS: () => [...QUERY_KEYS.USERS.BASE, "followRecommends"] as const
  }
};
