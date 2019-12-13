import React from "react";
import { observer } from "mobx-react-lite";

import { useNumbersStore } from "../hooks";

const NumbersInfo: React.FunctionComponent = () => {
  const numbersStore = useNumbersStore();

  return (
    <div>
      <div>Sum: {numbersStore.sum}</div>
      <div>Product: {numbersStore.product}</div>
      <div>Average: {numbersStore.average}</div>
    </div>
  );
};

export default observer(NumbersInfo);
