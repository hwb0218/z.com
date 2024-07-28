import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";

import BackButton from "../_component/back-button/BackButton";
import Post from "../_component/post/Post";

import style from "./profile.module.css";
import { QUERY_KEYS } from "@/constants/queryKeys";
import UserPosts from "./_component/UserPosts";

interface Props {
  params: { username: string };
}

export default async function Page({ params }: Props) {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: QUERY_KEYS.USERS.INFO(username) });
  await queryClient.prefetchQuery({ queryKey: QUERY_KEYS.POSTS.USER_POSTS(username) });
  const dehydarateState = dehydrate(queryClient);

  const user = {
    id: "zerohch0",
    nickname: "제로초",
    image: "/5Udwvqim.jpg"
  };

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydarateState}>
        <div className={style.header}>
          <BackButton />
          <h3 className={style.headerTitle}>{user.nickname}</h3>
        </div>
        <div className={style.userZone}>
          <div className={style.userImage}>
            <img src={user.image} alt={user.id} />
          </div>
          <div className={style.userName}>
            <div>{user.nickname}</div>
            <div>@{user.id}</div>
          </div>
          <button className={style.followButton}>팔로우</button>
        </div>
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}
