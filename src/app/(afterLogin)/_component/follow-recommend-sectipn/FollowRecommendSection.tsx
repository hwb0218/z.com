"use client";

import { useQuery } from "@tanstack/react-query";

import { getFollowRecommends } from "../../_lib/getFollowRecommends";

import { QUERY_KEYS } from "@/constants/queryKeys";

import { User } from "@/types/user";
import FollowRecommend from "../follow-recommend/FollowRecommend";

const FollowRecommendSection = () => {
  const { data } = useQuery<User[]>({
    queryKey: QUERY_KEYS.USERS.FOLLOW_RECOMMENDS(),
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });

  return data?.map(user => <FollowRecommend key={user.id} user={user} />);
};

export default FollowRecommendSection;
