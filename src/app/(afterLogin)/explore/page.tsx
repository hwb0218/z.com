import SearchForm from "@/app/(afterLogin)/_component/search-form/SearchForm";

import style from "./explore.module.css";
import TrendSection from "./trendSection/TrendSection";

export default function Page() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <TrendSection />
      </div>
    </main>
  );
}
