import style from "./home.module.css";

import Tab from "@/app/(afterLogin)/home/_component/tab/Tab";
import TabProvider from "@/app/(afterLogin)/home/_provider/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/post-form/PostForm";
import Post from "@/app/(afterLogin)/_component/post/Post";

export default function Page() {
  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
