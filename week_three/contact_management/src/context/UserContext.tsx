import React, { createContext, useState } from "react";
import { Person } from "../components/model/model";

interface ContextProps {
  personList: Person[];
  setPersonList: React.Dispatch<React.SetStateAction<Person[]>>;
}

const initialPersonList: Person[] = [];

export const PersonContext = createContext<ContextProps>({
  personList: initialPersonList,
  setPersonList: () => {},
});

type PersonContextProviderProps = {
  children: React.ReactNode;
};

export const PersonProvider = ({ children }: PersonContextProviderProps) => {
  const [personList, setPersonList] = useState<Person[]>(initialPersonList);

  return (
    <PersonContext.Provider value={{ personList, setPersonList }}>
      {children}
    </PersonContext.Provider>
  );
};
