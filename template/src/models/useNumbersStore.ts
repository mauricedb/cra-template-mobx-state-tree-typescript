import { useContext } from "react";

import { NumbersStoreContext, NumbersType } from ".";

export const useNumbersStore = (): NumbersType => {
  const store = useContext(NumbersStoreContext);

  return store!;
};
