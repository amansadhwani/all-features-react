import React, { useState } from "react";

export const StateDiff = () => {
  const { count, increment, decrement } = useCounter(10);
  const incrementDouble = () => {
    increment();
    increment();
  };
  const decrementDouble = () => {
    decrement();
    decrement();
  };
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={incrementDouble}>+2</button>
      <button onClick={decrementDouble}>-2</button>
    </div>
  );
};

export const useCounter = (init: number = 0) => {
  const [count, setCount] = useState(init);
  // const increment = () => setCount(count + 1);
  // const decrement = () => setCount(count - 1);
  const increment = () => setCount((count) => count + 1);
  const decrement = () => setCount((count) => count - 1);
  return { count, increment, decrement };
};
