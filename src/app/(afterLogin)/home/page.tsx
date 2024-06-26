import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import TabProvider from "./_provider/TabProvider";

import Tab from "./_component/tab/Tab";
import PostForm from "./_component/post-form/PostForm";
import TabDecider from "./_component/tabDecider/TabDecider";

import { getPostRecommends } from "./_service/getPostRecommends";

import { QUERY_KEYS } from "@/constants/queryKeys";

import style from "./home.module.css";

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: QUERY_KEYS.POSTS.RECOMMENDS(), queryFn: getPostRecommends });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <TabDecider />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
