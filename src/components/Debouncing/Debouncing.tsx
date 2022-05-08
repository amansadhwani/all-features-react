import React, { useState } from "react";

export const Debouncing = () => {
  const [value, setValue] = useState("");
  let timer: any;

  const debounce = (func: any, delay: number) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(func, delay);
  };
  const delayApiCall = () => {
    debounce(() => {
      console.log("1st");
    }, 1000);
  };
  const onChangeValue = (e: string) => {
    setValue(e);
    delayApiCall();
  };
  return (
    <>
      <h1>Debouncing</h1>
      <input
        value={value}
        onChange={(e: any) => onChangeValue(e.target.value)}
        style={{ margin: "30px" }}
        placeholder="input search"
        //onKeyDown={() => delayApiCall()}
      />
    </>
  );
};
