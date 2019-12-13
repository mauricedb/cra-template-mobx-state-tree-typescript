import React from "react";
import { observer } from "mobx-react-lite";

import { useNumbersStore } from "../models";

const NumbersList: React.FunctionComponent = () => {
  const numbersStore = useNumbersStore();

  return (
    <ul className="Numbers-list">
      {numbersStore.numbers.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
};

export default observer(NumbersList);
