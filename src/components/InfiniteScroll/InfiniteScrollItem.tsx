import React, { useState, useEffect } from "react";

export const InfiniteScrollItem = () => {
  const [data, setData] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ]);

  const loadMore = () => {
    let addMore = new Array(15);
    console.log(data);
    setData((oldData) => [...oldData, ...addMore]);
  };

  const onScroll = (e: any) => {
    // console.log("scrollTop=>", e.target.scrollTop);
    // console.log("clientHeight=>", e.target.clientHeight);
    // console.log("scrollHeight=>", e.target.scrollHeight);
    //let add=e.target.scrollTop+e.target.clientHeight+e.target.scrollHeight
    if (
      e.target.scrollTop + e.target.clientHeight + 1 >=
      e.target.scrollHeight
    ) {
      loadMore();
    }
  };
  useEffect(() => {
    let infiniteID: any = document.getElementById("infinite-main-item-div");
    infiniteID.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div id="infinite-main-item-div" className="infinite-main-item-div">
        {data.map((item, index) => (
          <h1 key={index}>Item {index}</h1>
        ))}
      </div>
    </>
  );
};
