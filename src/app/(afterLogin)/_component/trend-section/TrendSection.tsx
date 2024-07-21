"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

import Trend from "./trend/Trend";

import { QUERY_KEYS } from "@/constants/queryKeys";
import { getTrends } from "../../_lib/getTrends";
import { Hashtag } from "@/types/hashtag";

import styles from "./trendSection.module.css";

export default function TrendSection() {
  const { data: session } = useSession();
  const { data } = useQuery<Hashtag[]>({
    queryKey: QUERY_KEYS.TRENDS.BASE,
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
    enabled: !!session?.user
  });

  const pathname = usePathname();

  if (pathname === "/explore") {
    return null;
  }

  if (!session?.user) {
    return (
      <div className={styles.trendBg}>
        <div className={styles.noTrend}>트렌드를 가져올 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className={styles.trendBg}>
      <div className={styles.trend}>
        <h3>나를 위한 트렌드</h3>
        {data?.map(trend => <Trend key={trend.tagId} trend={trend} />)}
      </div>
    </div>
  );
}
