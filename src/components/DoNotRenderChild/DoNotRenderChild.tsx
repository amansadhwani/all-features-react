import React from "react";

const DoNotRenderChild = () => {
  return (
    <Parent>
      <Child />
    </Parent>
  );
};

export default DoNotRenderChild;

const Parent = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {count}
      {children}
    </div>
  );
};

const Child = () => {
  console.log("HELLO I AM RENDERED");
  return (
    <div>
      <h1>CHILD Component I am not re-rendered</h1>
      <h1>If i was inside parent I would have re-rendered</h1>

    </div>
  );
};