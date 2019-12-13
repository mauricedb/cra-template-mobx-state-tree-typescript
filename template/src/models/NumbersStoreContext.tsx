import React, { createContext, useState } from "react";
import { NumbersType, NumbersStore } from "./NumbersStore";

export const NumbersStoreContext = createContext<NumbersType | null>(null);

export const NumbersStoreProvider: React.FunctionComponent = ({ children }) => {
  const [numbersStore] = useState(() => NumbersStore.create());

  return (
    <NumbersStoreContext.Provider value={numbersStore}>
      {children}
    </NumbersStoreContext.Provider>
  );
};
