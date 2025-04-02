import { createContext, ReactNode, useContext, useState } from "react";
import { SpendProps } from "../shared/types/SpendProps";
import { asyncStorage } from "../storage/SpendStorage";

type SpendContextType = {
  dlist: SpendProps[];
  refreshDList: () => void;
};

const SpendsContext = createContext<SpendContextType | null>(null);

export const useSpendsContext = () => {
  const context = useContext(SpendsContext);
  if (!context) {
    throw new Error(
      "useSpendsContext must be used within a SpendsProvider"
    );
  }
  return context;
};

export const SpendsProvider = ({ children }: { children: ReactNode }) => {
  const [dlist, setDlist] = useState<SpendProps[]>([]);

  async function refreshDList() {
    const listToSet = await asyncStorage.spendList();
    setDlist(listToSet);
  }

  return (
    <SpendsContext.Provider value={{ dlist, refreshDList }}>
      {children}
    </SpendsContext.Provider>
  );
};
