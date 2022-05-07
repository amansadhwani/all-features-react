import React, { useState } from "react";
import { data } from "./data";
const Accordin = ({ data }: any) => {
  const [expand, setExpand] = useState(false);
  if (data.isFolder) {
    return (
      <>
        <h2 onClick={() => setExpand(!expand)}>+{data.name}</h2>
        <div
          style={{ paddingLeft: "15px", display: expand ? "block" : "none" }}
        >
          {data.items.map((singleItem: any) => (
            <Accordin data={singleItem} />
          ))}
        </div>
      </>
    );
  } else {
    return <h2>{data.name}</h2>;
  }
};

export const AppAccordin = () => {
  return <Accordin data={data} />;
};
