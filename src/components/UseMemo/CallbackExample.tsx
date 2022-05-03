import React, { useCallback, useState } from "react";

export const CallbackExample = () => {
  const [count, setCount] = React.useState(0);
  const getValue = useCallback((value: any) => console.log(value), []);
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increase count
      </button>
      <ChildComponent onItemClick={getValue} />
    </div>
  );
};

const ChildComponent = React.memo(({ onItemClick }: any) => {
  const array = new Array(1000).fill(1);
  const renderItem = (item: any) => (
    <div key={item} onClick={onItemClick}>
      {item}
    </div>
  );
  React.useEffect(() => {
    console.log("child render again");
  });
  return <div>{array.map((elem) => renderItem(elem))}</div>;
});
