import React, { useEffect,useRef  } from "react";
import { MultipleProgress } from "./MultipleProgress";
import './ProgressBar.css'
export const SingleProgress = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const callProgress = (): void => {
   
    //let findClass = document.getElementById("single-progress") as HTMLElement;
    const findClass = progressRef.current;
    if (!findClass) return;
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
        <div ref={progressRef} id="single-progress" className="single-progress"></div>
      </div>
      <MultipleProgress />
    </h1>
  );
};
