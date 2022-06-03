import { useEffect, useRef } from "react";

export const Temp = () => {
  const inputField = useRef<any>(null);

  const ok = () => {
    alert(inputField?.current?.value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      <div>
        <input type="text" ref={inputField} />
        <button type="submit" onClick={ok}>
          Fetch data
        </button>
      </div>
    </div>
  );
};
