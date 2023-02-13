import React, { useState, useEffect } from "react";

export const CountDown = () => {
  const [counter, setCounter] = useState(10);
  const [stop,setStop]=useState(false)

  const stopTimer = () =>{
    setStop(true)
  }

  const startTimer = ()=>{
    setStop(false)
  }
  useEffect(() => {
    // if (counter === 0) {
    //   return;
    // }
    // setTimeout(() => {
    //   setCounter((prevCount) => prevCount - 1);
    // }, 1000);

    const timeInterval = setInterval(() => {
      counter > 0 && !stop&& setCounter((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [counter,stop]);
  return (
    <>
      <h1>CountDown {counter}</h1>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
};
