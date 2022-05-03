import React, { useState, useMemo } from "react";
import MemoChildren from "./MemoChildren";
const MemoExample = () => {
  const [counter, setCounter] = useState(0);

  const computeSomething = useMemo(() => {
    console.log("again");
    return 4 * 4 * 4;
  }, []);

  return (
    <>
      <h1>MemoExample</h1>
      <MemoChildren />
      <button onClick={() => setCounter(counter + 1)}>Update </button>
      <div> {counter}</div>
      {computeSomething}
    </>
  );
};

export default MemoExample;
