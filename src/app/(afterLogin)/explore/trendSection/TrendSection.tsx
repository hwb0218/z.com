"use client";

import { useQuery } from "@tanstack/react-query";

import Trend from "../../_component/trend-section/trend/Trend";

import { getTrends } from "../../_lib/getTrends";

import { Hashtag } from "@/types/hashtag";
import { QUERY_KEYS } from "@/constants/queryKeys";

const TrendSection = () => {
  const { data } = useQuery<Hashtag[]>({
    queryKey: QUERY_KEYS.TRENDS.BASE,
    queryFn: getTrends,
    staleTime: 60 * 1000, // fresh -> stale, 5분이라는 기준
    gcTime: 300 * 1000
  });
  return data?.map(trend => <Trend trend={trend} key={trend.tagId} />);
};

export default TrendSection;
