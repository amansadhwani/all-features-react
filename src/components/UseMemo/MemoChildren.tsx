import React, { memo } from "react";
const MemoChildren = () => {
  return (
    <>
      {console.log("re-rednered")}
      <h1>I am Child</h1>
    </>
  );
};

export default memo(MemoChildren);
