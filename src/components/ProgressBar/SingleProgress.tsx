import React, { useEffect } from "react";
import { MultipleProgress } from "./MultipleProgress";
export const SingleProgress = () => {
  const callProgress = () => {
    let findClass: any = window.document.getElementById("single-progress");
    let width = 0;
    let interval = setInterval(() => {
      if (width > 100) {
        clearInterval(interval);
        return;
      }
      findClass.style.width = `${width}%`;
      width += 2;
    }, 100);
  };
  useEffect(() => {
    callProgress();
  }, []);

  return (
    <h1>
      {" "}
      Single Progress
      <div className="single-progress-parent">
        <div id="single-progress" className="single-progress"></div>
      </div>
      <MultipleProgress />
    </h1>
  );
};
