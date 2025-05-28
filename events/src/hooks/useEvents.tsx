import { createContext, ReactNode, useContext, useState } from "react";
import { EventProps } from "../shared/types/EventProps";
import { asyncStorage } from "../storage/GenericStorage";

type EventContextType = {
  dlist: EventProps[];
  refreshDList: () => void;
  removeItem: (id: number) => void;
};

const EventContext = createContext<EventContextType | null>(null);

export const useEventContext = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEventContext must be used within a EventsProvider");
  }
  return context;
};

export const EventsProvider = ({ children }: { children: ReactNode }) => {
  const [dlist, setDlist] = useState<EventProps[]>([]);

  async function refreshDList() {
    const listToSet = await asyncStorage.genericList();
    setDlist(listToSet);
  }

  async function removeItem(id: number) {
    const originalList = await asyncStorage.genericList();

    let newId = 0;
    const listToSet = originalList.reduce((acc, item) => {
      if (item.id !== id) {
        acc.push({ ...item, id: newId++ });
      }
      return acc;
    }, [] as EventProps[]);

    await asyncStorage.genericArrayCreate(listToSet);
    refreshDList();
  }

  return (
    <EventContext.Provider value={{ dlist, refreshDList, removeItem }}>
      {children}
    </EventContext.Provider>
  );
};
