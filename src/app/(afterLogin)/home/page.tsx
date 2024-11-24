import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

import TabProvider from "./_provider/TabProvider";

import Tab from "./_component/tab/Tab";
import PostForm from "./_component/post-form/PostForm";
import TabDecider from "./_component/tabDecider/TabDecider";

import { getPostRecommends } from "./_service/getPostRecommends";

import { QUERY_KEYS } from "@/constants/queryKeys";

import style from "./home.module.css";
import { Suspense } from "react";
import Loading from "./loading";
import TabDeciderSuspense from "./_component/tabDeciderSuspense/TabDeciderSuspense";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm me={session} />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
