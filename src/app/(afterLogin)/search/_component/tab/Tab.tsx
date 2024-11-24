"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import style from "./tab.module.css";

export default function Tab() {
  const [current, setCurrent] = useState("hot");
  const router = useRouter();
  const searchParams = useSearchParams();
  const onClickHot = () => {
    setCurrent("hot");
    let href = `/serach?q=${searchParams.get("q")}`;
    if (searchParams.has("pf")) {
      href += `&pf=${searchParams.get("pf")}`;
    }
    router.replace(href);
  };
  const onClickNew = () => {
    setCurrent("new");
    let href = `/serach?q=${searchParams.get("q")}&f=live`;
    if (searchParams.has("pf")) {
      href += `&pf=${searchParams.get("pf")}`;
    }
    router.replace(href);
  };

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
}
