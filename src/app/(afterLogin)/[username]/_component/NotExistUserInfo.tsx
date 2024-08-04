import BackButton from "../../_component/back-button/BackButton";

import styles from "./userInfo.module.css";

interface Props {
  username: string;
}

const NotExistUserInfo = ({ username }: Props) => {
  return (
    <>
      <div className={styles.header}>
        <BackButton />
        <h3 className={styles.headerTitle}>프로필</h3>
      </div>
      <div className={styles.userZone}>
        <div className={styles.userImage}></div>
        <div className={styles.userName}>
          <div>@{username}</div>
        </div>
      </div>
      <div
        style={{
          height: 100,
          alignItems: "center",
          fontSize: 31,
          fontWeight: "bold",
          justifyContent: "center",
          display: "flex"
        }}
      >
        계정이 존재하지 않음
      </div>
    </>
  );
};

export default NotExistUserInfo;
