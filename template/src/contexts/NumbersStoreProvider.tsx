import React, { useState } from "react";
import { NumbersStore } from "../models/NumbersStore";
import { NumbersStoreContext } from "./NumbersStoreContext";

export const NumbersStoreProvider: React.FunctionComponent = ({ children }) => {
  const [numbersStore] = useState(() => NumbersStore.create());

  return (
    <NumbersStoreContext.Provider value={numbersStore}>
      {children}
    </NumbersStoreContext.Provider>
  );
};
