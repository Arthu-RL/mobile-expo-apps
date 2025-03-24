import { createContext, ReactNode, useContext, useState } from "react";
import { SpendProps } from "../shared/types/SpendProps";

type SpendContextType = {
  dlist: SpendProps[];
  setDlist: React.Dispatch<React.SetStateAction<SpendProps[]>>;
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

  return (
    <SpendsContext.Provider value={{ dlist, setDlist }}>
      {children}
    </SpendsContext.Provider>
  );
};
