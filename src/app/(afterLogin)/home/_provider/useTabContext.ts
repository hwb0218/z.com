import { useContext } from "react";

import { TabContext } from "@/app/(afterLogin)/home/_provider/TabProvider";

export default function useTabContext() {
  const context = useContext(TabContext);

  if (context === undefined) {
    throw new Error("useTabContext must be used within a TabContextProvider");
  }

  return context;
}
