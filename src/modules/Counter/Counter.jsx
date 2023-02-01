import { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  console.log(value, setValue);

  const increment = () => setValue(value + 1);

  const decrement = () => setValue(value - 1);
  return (
    <>
      <button onClick={increment} type="button">
        +
      </button>
      <div>{value}</div>
      <button onClick={decrement} type="button">
        -
      </button>
    </>
  );
};

export default Counter;
