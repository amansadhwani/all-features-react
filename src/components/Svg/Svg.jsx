import React from "react";

//https://www.youtube.com/watch?v=Q4J4YlCkye0&list=PL0b6OzIxLPbxaPpusPu2mtfcRE6XiSRyk&index=10

const Svg = () => {
  return (
    <div style={{ margin: "20px" }}>
      <h1>Svg</h1>
      <LineSvg />
      <RectangleSvg />
      <CircleSvg />
      <EllipseSvg />
      <PolylineSvg />
      <PolygonSvg />
      <PathSvg />
      <PathArcsSvg/>
      <TextSvg/>
    </div>
  );
};

const LineSvg = () => {
  return (
    <>
      <h3>Line</h3>
      <svg height="210" width="500">
        <line x1="0" y1="30" x2="150" y2="30" stroke="blue" />

        <line x1="150" y1="30" x2="150" y2="60" stroke="green" />

        <line x1="150" y1="60" x2="0" y2="60" stroke="blue" />
        <line x1="0" y1="60" x2="0" y2="30" stroke="green" />
      </svg>
    </>
  );
};

const RectangleSvg = () => {
  return (
    <>
      <h3>Rectagle</h3>
      <svg height="210" width="500">
        <rect
          x="10"
          y="30"
          width="400"
          height="150"
          fill="yellow"
          stroke="blue"
        />
      </svg>
    </>
  );
};

const CircleSvg = () => {
  return (
    <>
      <h3>Circle</h3>
      <svg height="210" width="500">
        <circle cx="80" cy="80" r="50" fill="none" stroke="black" />
      </svg>
    </>
  );
};

const EllipseSvg = () => {
  return (
    <>
      <h3>Ellipse</h3>
      <svg height="210" width="500">
        <ellipse cx="80" cy="80" rx="50" ry="60" fill="none" stroke="black" />
        <ellipse cx="40" cy="20" rx="25" ry="35" fill="none" stroke="black" />
      </svg>
    </>
  );
};

const PolylineSvg = () => {
  return (
    <>
      <h3>Polyline</h3>
      <svg height="210" width="500">
        <polyline
          points="0,40 40,40 40,80 80,80 80,120 120,120 120,160"
          fill="green"
          stroke="blue"
        />
      </svg>
    </>
  );
};

const PolygonSvg = () => {
  return (
    <>
      <h3>Polygon</h3>
      <svg height="210" width="500">
        <polygon points="40,20 80,40 50,60" fill="green" stroke="blue" />
      </svg>
    </>
  );
};

const PathSvg = () => {
  return (
    <>
      <h3>Path</h3>
      <svg height="210" width="500">
        <path d="M10,50 C20,90 50,10 70,50" stroke="blue" fill="none"/>
      </svg>
    </>
  );
};


const PathArcsSvg = () => {
    return (
      <>
        <h3>Path</h3>
        <svg height="210" width="500">
          <path d="M10,50 A50,50 0 0,1 90,50" stroke="blue" fill="none"/>
        </svg>
      </>
    );
  };

  const TextSvg = () => {
    return (
      <>
        <h3>Path</h3>
        <svg height="210" width="500">
         <text x="40" y="50" fill="blue">Aman
         <tspan dx="45" dy="55">Sadhwani</tspan>
         </text>
        </svg>
      </>
    );
  };

export default Svg;
