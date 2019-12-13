import { useContext } from "react";

import { NumbersStoreContext } from "../contexts";
import { NumbersType } from "../models";

export const useNumbersStore = (): NumbersType => {
  const store = useContext(NumbersStoreContext);
  if (!store) {
    throw new Error(
      "The NumbersStoreContext is not provided using the <NumbersStoreProvider />."
    );
  }
  return store;
};
