import Room from "./_component/Room";

import style from "./message.module.css";

export default function Page() {
  return (
    <div className={style.message}>
      <div className={style.header}>
        <h3>message</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </div>
  );
}
