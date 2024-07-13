import BackButton from "../_component/back-button/BackButton";
import SearchForm from "../_component/search-form/SearchForm";
import Tab from "./_component/tab/Tab";
import SearchResult from "./_component/SearchResult";

import style from "./search.module.css";

interface Props {
  searchParams: { q: string; f?: string; pf?: string };
}
export default function Search({ searchParams }: Props) {
  return (
    <main className={style.main}>
      <div className={style.searchTop}>
        <div className={style.searchZone}>
          <div className={style.buttonZone}>
            <BackButton />
          </div>
          <div className={style.formZone}>
            <SearchForm q={searchParams.q} />
          </div>
        </div>
        <Tab />
      </div>
      <div className={style.list}>
        <SearchResult searchParams={searchParams} />
      </div>
    </main>
  );
}
