export const QUERY_KEYS = {
  POSTS: {
    BASE: ["posts"] as const,
    RECOMMENDS: () => [...QUERY_KEYS.POSTS.BASE, "recommends"] as const,
    FOLLOWINGS: () => [...QUERY_KEYS.POSTS.BASE, "followings"] as const,
    USER_POSTS: (username: string) => [...QUERY_KEYS.POSTS.BASE, "users", username] as const
  },
  TRENDS: {
    BASE: ["trends"] as const
  },
  USERS: {
    BASE: ["users"] as const,
    INFO: (username: string) => [...QUERY_KEYS.USERS.BASE, username] as const,
    FOLLOW_RECOMMENDS: () => [...QUERY_KEYS.USERS.BASE, "followRecommends"] as const
  }
};
