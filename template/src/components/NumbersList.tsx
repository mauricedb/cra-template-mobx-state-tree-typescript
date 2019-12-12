import React from "react";
import { useObserver } from "mobx-react-lite";

import { useNumbersStore } from "../models";

const NumbersList: React.FunctionComponent = () => {
  const numbersStore = useNumbersStore();

  return useObserver(() => {
    return (
      <ul className="Numbers-list">
        {numbersStore.numbers.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    );
  });
};

export default NumbersList;
