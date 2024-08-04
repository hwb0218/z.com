import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import { QUERY_KEYS } from "@/constants/queryKeys";
import UserPosts from "./_component/UserPosts";
import UserInfo from "./_component/UserInfo";

import styles from "./profile.module.css";
import { getUser } from "./_lib/getUser";
import { getUserPosts } from "./_lib/getUserPosts";

interface Props {
  params: { username: string };
}

export default async function ProfilePage({ params }: Props) {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: [...QUERY_KEYS.USERS.INFO(username)], queryFn: getUser });
  await queryClient.prefetchQuery({ queryKey: [...QUERY_KEYS.POSTS.USER_POSTS(username)], queryFn: getUserPosts });
  const dehydarateState = dehydrate(queryClient);

  return (
    <main className={styles.main}>
      <HydrationBoundary state={dehydarateState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
