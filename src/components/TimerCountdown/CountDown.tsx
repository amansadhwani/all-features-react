import React, { useState, useEffect } from "react";

export const CountDown = () => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    // if (counter === 0) {
    //   return;
    // }
    // setTimeout(() => {
    //   setCounter((prevCount) => prevCount - 1);
    // }, 1000);

    const timeInterval = setInterval(() => {
      counter > 0 && setCounter((prevCount) => prevCount - 1);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [counter]);
  return (
    <>
      <h1>CountDown {counter}</h1>
    </>
  );
};
