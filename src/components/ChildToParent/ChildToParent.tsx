import React, { useState } from "react";

const ChildToParent = () => {
  const { search, render, renderWithProps } = useChild();
  return (
    <>
      <h1>ChildToParent</h1>
      <h2>Parent Search : {search}</h2>
      {render}
      {renderWithProps({ message: "hello from the child component" })}
    </>
  );
};

export const useChild = () => {
  const [search, setSearch] = useState("");

  return {
    search,
    render: (
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
    ),
    renderWithProps: ({ message }: any) => <div>{message}</div>,
  };
};

export default ChildToParent;
