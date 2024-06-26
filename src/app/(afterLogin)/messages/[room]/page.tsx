import Link from "next/link";
import { faker } from "@faker-js/faker";
import cx from "classnames";

import BackButton from "@/app/(afterLogin)/_component/back-button/BackButton";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

import styles from "./chatRoom.module.css";

export default function page() {
  const user = {
    id: "hero",
    nickname: "영웅",
    image: faker.image.avatar()
  };

  const messages = [
    { roomId: 123, messageId: "zeroch0", content: "안녕하세요.", createdAt: new Date() },
    { roomId: 123, messageId: "hero", content: "안녕히가세요.", createdAt: new Date() }
  ];

  return (
    <div className={styles.chatRoom}>
      <div className={styles.header}>
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={styles.userInfo}>
        <img src={user.image} alt={user.id} />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </Link>
      <div className={styles.list}>
        {messages.map(message => {
          if (message.messageId === "zeroch0") {
            return (
              <div key={message.messageId} className={cx(styles.message, styles.myMessage)}>
                <div className={styles.content}>{message.content}</div>
                <div className={styles.date}>{dayjs(message.createdAt).fromNow(true)}</div>
              </div>
            );
          }
          return (
            <div key={message.messageId} className={cx(styles.message, styles.yourMessage)}>
              <div className={styles.content}>{message.content}</div>
              <div className={styles.date}>{dayjs(message.createdAt).fromNow(true)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
