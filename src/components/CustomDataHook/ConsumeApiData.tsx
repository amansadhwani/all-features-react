import React from "react";
import { useApi } from "./useApi";
export const ConsumeApiData = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100";
  const { data, loading } = useApi(url);
  return (
    <>
      <h1>Custom Data Hook</h1>
      {console.log(loading)}
      {data &&
        data.map((item: any, index: number) => {
          return (
            <div key={index}>
              {index + 1} ) {item.name}
            </div>
          );
        })}
    </>
  );
};
