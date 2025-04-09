import { createContext, ReactNode, useContext, useState } from "react";
import { FopagProps } from "../shared/types/FopagProps";
import { asyncStorage } from "../storage/GenericStorage";

type SpendContextType = {
  dlist: FopagProps[];
  refreshDList: () => void;
};

const FopagContext = createContext<SpendContextType | null>(null);

export const useFopagContext = () => {
  const context = useContext(FopagContext);
  if (!context) {
    throw new Error(
      "useFopagContext must be used within a FopagProvider"
    );
  }
  return context;
};

export const FopagProvider = ({ children }: { children: ReactNode }) => {
  const [dlist, setDlist] = useState<FopagProps[]>([]);

  async function refreshDList() {
    const listToSet = await asyncStorage.genericList();
    setDlist(listToSet);
  }

  return (
    <FopagContext.Provider value={{ dlist, refreshDList }}>
      {children}
    </FopagContext.Provider>
  );
};
