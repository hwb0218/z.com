import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";

import { getSinglePost } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getSinglePost";
import { getComments } from "@/app/(afterLogin)/[username]/status/[id]/_lib/getComments";

import PhotoModalCloseButton from "./_component/PhotoModalCloseButton";
import ImageZone from "./_component/image-zone/ImageZone";
import SinglePost from "@/app/(afterLogin)/[username]/status/[id]/_component/single-post/SinglePost";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/comment-form/CommentForm";
import Comments from "@/app/(afterLogin)/[username]/status/[id]/_component/comments/Comments";

import style from "./photoModal.module.css";

interface Props {
  params: { id: string };
}

export default async function Default({ params }: Props) {
  const { id } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ["post", id], queryFn: getSinglePost });
  await queryClient.prefetchQuery({ queryKey: ["posts", "comments", id], queryFn: getComments });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className={style.container}>
      <HydrationBoundary state={dehydratedState}>
        <PhotoModalCloseButton />
        <ImageZone id={id} />
        <div className={style.commentZone}>
          <SinglePost id={id} noImage />
          <CommentForm id={id} />
          <Comments id={id} />
        </div>
      </HydrationBoundary>
    </div>
  );
}
