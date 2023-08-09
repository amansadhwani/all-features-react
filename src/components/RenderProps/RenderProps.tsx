import React, { useState, ReactNode,FC } from "react";

type TRenderCustomValue = {
  renderCustomValue: (value: string) => ReactNode;
};

const RenderProps = () => {
  return <Input renderCustomValue={(value: string) => <>hello {value} world </>} />;
};

const Input : FC<TRenderCustomValue>=({ renderCustomValue } ) => {
    
  const [name, setName] = useState("");
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      {renderCustomValue(name)}
    </>
  );
};

export default RenderProps;
