import React, { useState, useEffect } from "react";
import axios from "axios";

type dataProps = {
  name: String;
  url?: String;
};

export const InfiniteScroll = () => {
  let offset = 0;
  const [data, setData] = useState<dataProps[]>([]);
  const getData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`)
      .then(function (response) {
        setData((oldData) => [...oldData, ...response.data.results]);
      });
    offset += 100;
  };

  const handleScroll = (e: any) => {
    // console.log(e.target.documentElement.scrollTop);
    // console.log(window.innerHeight);
    // console.log(e.target.documentElement.scrollHeight);

    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      console.log("at bottom of page");
      getData();
    }
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h1>InfiniteScroll</h1>{" "}
      {data.map((item, index) => {
        return (
          <div key={index}>
            {index + 1} ) {item.name}
          </div>
        );
      })}
    </>
  );
};
