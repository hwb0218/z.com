import Link from "next/link";
// import Image from "next/image";

import styles from "./postImages.module.css";

import cx from "classnames";

interface Props {
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
}

export default function PostImages({ post }: Props) {
  if (!post.Images) return null;
  if (!post.Images.length) return null;

  if (post.Images.length === 1) {
    return (
      <div>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          className={cx(styles.postImageSection, styles.oneImage)}
          style={{ backgroundImage: `url(${post.Images[0]?.link})` }}
        >
          <img src={post.Images[0]?.link} alt="" />
        </Link>
      </div>
    );
  }

  if (post.Images.length === 2) {
    return (
      <div className={cx(styles.postImageSection, styles.twoImage)}>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: "cover" }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: "cover" }}
        ></Link>
      </div>
    );
  }

  if (post.Images.length === 3) {
    return (
      <div className={cx(styles.postImageSection, styles.threeImage)}>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: "cover" }}
        ></Link>
        <div>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: "cover" }}
          ></Link>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            style={{ backgroundImage: `url(${post.Images[2]?.link})`, backgroundSize: "cover" }}
          ></Link>
        </div>
      </div>
    );
  }

  if (post.Images.length === 4) {
    return (
      <div className={cx(styles.postImageSection, styles.fourImage)}>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{ backgroundImage: `url(${post.Images[0]?.link})`, backgroundSize: "cover" }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{ backgroundImage: `url(${post.Images[1]?.link})`, backgroundSize: "cover" }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
          style={{ backgroundImage: `url(${post.Images[2]?.link})`, backgroundSize: "cover" }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
          style={{ backgroundImage: `url(${post.Images[3]?.link})`, backgroundSize: "cover" }}
        ></Link>
      </div>
    );
  }

  return null;
}
