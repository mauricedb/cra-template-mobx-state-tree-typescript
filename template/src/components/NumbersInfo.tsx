import React from "react";
import { useObserver } from "mobx-react-lite";

import { useNumbersStore } from "../models";

const NumbersInfo: React.FunctionComponent = () => {
  const numbersStore = useNumbersStore();

  return useObserver(() => {
    return (
      <div>
        <div>Sum: {numbersStore.sum}</div>
        <div>Product: {numbersStore.product}</div>
        <div>Average: {numbersStore.average}</div>
      </div>
    );
  });
};

export default NumbersInfo;
