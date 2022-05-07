import React, { useState } from "react";
import { flushSync } from "react-dom";
export const AutoBatching = () => {
  const [name, setName] = useState("rafa");
  const [age, setAge] = useState(10);
  const [count, setCount] = useState(20);
  const [pin, setPin] = useState(2222);

  const clickMe = () => {
    setName("aman");
    flushSync(() => {
      setCount(30);
      // react will create a re-render here
    });
    setAge(50);
    setPin(1111);
  };

  return (
    <>
      {console.log("re-rendered")}
      <h1>AutoBatching</h1>
      <h1>Name: {name}</h1>
      <h1>Age : {age}</h1>
      <h1>count : {count}</h1>
      <h1>Pin : {pin}</h1>
      <button onClick={clickMe}>CLick Me </button>
    </>
  );
};
