import useGetUserInfoQuery from "../_hooks/useGetUserInfoQuery";

import NotExistUserInfo from "./NotExistUserInfo";
import BackButton from "../../_component/back-button/BackButton";

import styles from "./userInfo.module.css";

interface Props {
  username: string;
}

const UserInfo = ({ username }: Props) => {
  const { user, error } = useGetUserInfoQuery(username);

  if (error) {
    return <NotExistUserInfo username={username} />;
  }

  return (
    <>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>{user?.nickname}</h3>
      </div>
      <div className={styles.userZone}>
        <div className={styles.userImage}>
          <img src={user?.image} alt={user?.id} />
        </div>
        <div className={styles.userName}>
          <div>{user?.nickname}</div>
          <div>@{user?.id}</div>
        </div>
        <button className={styles.followButton}>팔로우</button>
      </div>
    </>
  );
};

export default UserInfo;
