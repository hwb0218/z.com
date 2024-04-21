"use client";

import { useState, useMemo, createContext, PropsWithChildren } from "react";

interface ITabContext {
  tab: string;
  setTab: (value: "rec" | "fol") => void;
}

export const TabContext = createContext<ITabContext>({
  tab: "rec",
  setTab: () => {}
});

export default function TabProvider({ children }: PropsWithChildren) {
  const [tab, setTab] = useState("rec");

  const contextValue = useMemo(
    () => ({
      tab,
      setTab
    }),
    [tab]
  );

  return <TabContext.Provider value={contextValue}>{children}</TabContext.Provider>;
}
