import React, { useRef, useEffect, useState } from "react";
import { select, line, curveCardinal } from "d3";

const D3 = () => {
  return (
    <>
      <D3Basic />
      <D3Line />
    </>
  );
};

export default D3;

const D3Basic = () => {
  const [data, setData] = useState([20, 40, 60, 80, 100]);

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("r", (value) => value)
      .attr("cx", (value) => value * 2)
      .attr("cy", (value) => value * 2)
      .attr("stroke", "red")
      .attr("fill", "white");
  }, [data]);
  return (
    <>
      <h1>D3</h1>
      <svg ref={svgRef}></svg>

      <button onClick={() => setData((prevdata) => [...prevdata, 10])}>
        Update Data
      </button>
      <br />
      <button onClick={() => setData(data.filter((value) => value > 45))}>
        Filter Data
      </button>
    </>
  );
};

const D3Line = () => {
  const [data, setData] = useState([20, 40, 60, 80, 100]);

  const svgRef = useRef();

  useEffect(() => {
    const svg = select(svgRef.current);
    const myLine = line()
      .x((value, index) => index * 50)
      .y((value) => value)
      .curve(curveCardinal);
    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => myLine(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);
  return (
    <>
      <h1>LINE</h1>
      <svg ref={svgRef}></svg>

      <button onClick={() => setData((prevdata) => [...prevdata, 10])}>
        Update Data
      </button>
      <br />
      <button onClick={() => setData(data.filter((value) => value > 45))}>
        Filter Data
      </button>
    </>
  );
};
