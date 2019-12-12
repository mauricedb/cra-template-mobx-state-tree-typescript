import React from "react";

import { useNumbersStore } from "../models";

const AddNumber: React.FunctionComponent = () => {
  const numbersStore = useNumbersStore();
  const [value, setValue] = React.useState(42);

  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={e => setValue(+e.target.value)}
      />
      <button
        onClick={() => {
          numbersStore.add(value);
          setValue(Math.floor(Math.random() * 100));
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddNumber;
