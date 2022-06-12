import { lazy, Suspense, useState } from "react";
/* Usual Import */
import Chart from "./Chart";
import ReactDOMServer from "react-dom/server";

/* Naive lazy load */
// const Chart = lazy(() => import("./Chart"));

/* Lazy load with prefetch */
// const Chart = lazy(() => import(/* webpackPrefetch: true */ "./Chart"));

/* Predictive lazy load */
// const loadChart = () => import("./Chart");
// const Chart = lazy(loadChart);

const LazyLoad = () => {
  const [shouldShowChart, setShouldShowChart] = useState(false);
  return (
    <div className="App">
      <button
        onClick={() => setShouldShowChart(!shouldShowChart)}
        // onFocus={loadChart}
        // onMouseEnter={loadChart}
      >
        {shouldShowChart ? "Hide chart" : "Show chart"}
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {shouldShowChart && <Chart />}
      </Suspense>
    </div>
  );
};

export default LazyLoad;
