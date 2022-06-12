import React from "react";

export function Temp() {
  const [data, setData] = React.useState({
    test: "hello",
  });

  const change = (e: any) => {
    data.test = e.target.value;
    debugger;
    setData(data);
  };

  return <input value={data.test} onChange={change}></input>;
}
