import Link from "next/link";
import { faker } from "@faker-js/faker";

import ActionButtons from "../action-buttons/ActionButtons";
import PostArticle from "../post-article/PostArticle";
import PostImages from "../post-images/PostImages";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
dayjs.locale("ko");
dayjs.extend(relativeTime);

import style from "./post.module.css";

interface Props {
  noImage?: boolean;
}

export default function Post({ noImage }: Props) {
  const target = {
    postId: 1,
    User: {
      id: "elonmusk",
      nickname: "Elon Musk",
      image: "/yRsRRjGO.jpg"
    },
    content: "post content",
    createdAt: new Date(),
    Images: [] as any[]
  };

  if (Math.random() > 0.5 && !noImage) {
    target.Images.push({ imageId: 1, link: faker.image.urlLoremFlickr() });
  }

  return (
    <PostArticle post={target}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${target.User.id}`} className={style.postUserImage}>
            <img src={target.User.image} alt={target.User.nickname} />
            <div className={style.postShade} />
          </Link>
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${target.User.id}`}>
              <span className={style.postUserName}>{`${target.User.nickname} `}</span>
              <span className={style.postUserId}>{`@${target.User.id}`}</span>
              &nbsp; · &nbsp;
            </Link>
            <span className={style.postDate}>{dayjs(target.createdAt).fromNow(true)}</span>
          </div>
          <div>{target.content}</div>
          <PostImages post={target} />
          <ActionButtons />
        </div>
      </div>
    </PostArticle>
  );
}
