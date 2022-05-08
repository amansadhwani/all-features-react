import React, { useRef } from "react";

export const Refs = () => {
  const inputName: any = useRef(null);

  const submitBtn = () => {
    console.log(inputName.current.value);
  };
  return (
    <>
      <h1>Refs</h1>

      <input
        ref={inputName}
        style={{ margin: "30px" }}
        placeholder="input search"
        //onKeyDown={() => delayApiCall()}
      />
      <button onClick={() => submitBtn()}>submit name</button>
    </>
  );
};
