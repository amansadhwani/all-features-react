import React, { useState, useMemo } from "react";

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const array = new Array(100).fill(2);
  const reducedValue = useMemo(
    () =>
      array.reduce((a, b) => {
        console.log("computed again");
        return a + b;
      }),
    []
  );
  return (
    <div>
      <h1>{count}</h1>
      <p> {reducedValue} </p>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase count
      </button>
    </div>
  );
}
