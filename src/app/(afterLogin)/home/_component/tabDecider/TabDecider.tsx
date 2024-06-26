"use client";

import useTabContext from "../../_provider/useTabContext";

import PostRecommends from "../postRecommends/PostRecommends";
import FollowingPosts from "../followingPosts/FollowingPosts";

export default function TabDecider() {
  const { tab } = useTabContext();

  if (tab === "rec") {
    return <PostRecommends />;
  }

  return <FollowingPosts />;
}
