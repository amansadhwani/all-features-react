import React, { useState } from "react";
const WebWorker = () => {
  const [count, setCount] = useState(0);
  const [normalCount, setNormalCount] = useState(0);

  const [webWorkerCount, setWebworkerCount] = useState(0);

  const onClickWithoutWorker = () => {
    let result = 0;
    for (let i = 0; i < 10000000000; i++) {
      result += i;
    }
    setWebworkerCount(result);
  };

  const onClickWithWebWorker = () => {
    const workerObj = new Worker("worker.js");
    workerObj.postMessage("Start Worker");
    debugger;
    workerObj.onmessage = function (e) {
      console.log(e);
      setWebworkerCount(e.data);
    };
  };

  return (
    <>
      <h1>Without Web Worker</h1>
      <button onClick={() => onClickWithoutWorker()}>
        {count} Click Me I will get stucked{" "}
      </button>
      <button onClick={() => setNormalCount(normalCount + 2)}>
        {normalCount} I will get stucked{" "}
      </button>

      <h1>With Web Worker</h1>
      <button onClick={() => onClickWithWebWorker()}>
        {webWorkerCount} Click Me I Execute In diffrent context and won't block
        Ui
      </button>
      <button onClick={() => setNormalCount(normalCount + 2)}>
        {normalCount} I won't get stucked now click me
      </button>
    </>
  );
};

export default WebWorker;
