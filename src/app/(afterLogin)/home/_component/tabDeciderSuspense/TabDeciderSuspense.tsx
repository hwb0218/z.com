import TabDecider from "../tabDecider/TabDecider";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import { getPostRecommends } from "../../_service/getPostRecommends";

export default async function TabDeciderSuspense() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <TabDecider />
    </HydrationBoundary>
  );
}
