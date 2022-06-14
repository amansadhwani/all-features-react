import React, { useState, useEffect } from "react";

export function Temp() {
  const [counter, setCounter] = useState(1200);
  function handleCounter() {
    setCounter((prevCount) => prevCount + 1);
  }
  useEffect(() => {
    const timeInterval = setInterval(() => {
      counter < 1202 && setCounter((prevCount) => prevCount + 1);
    }, 2000);

    return () => {
      clearInterval(timeInterval);
    };
  }, [counter]);
  return <h1>{counter} </h1>;
}
