import { InfiniteScroll } from "../components/InfiniteScroll/InfiniteScroll";
import { InfiniteScrollItem } from "../components/InfiniteScroll/InfiniteScrollItem";
import { Route, Routes } from "react-router-dom";
import { CustomPagination } from "../components/CustomPagination/CustomPagination";
import { ECommerce } from "../components/ECommerce/ECommerce";
import WithHoc from "../components/Hoc/HigherOrderComponent";
import MemoExample from "../components/UseMemo/MemoExample";
import { CallbackExample } from "../components/UseMemo/CallbackExample";
import { CountDown } from "../components/TimerCountdown/CountDown";
import { StateDiff } from "../components/StateDifference/StateDiff";
import { SingleProgress } from "../components/ProgressBar/SingleProgress";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="infinite-scroll-custom"
          element={<InfiniteScroll />}
        />
        <Route
          exact
          path="infinite-scroll-custom-item"
          element={<InfiniteScrollItem />}
        />
        <Route exact path="custom-pagination" element={<CustomPagination />} />
        <Route exact path="ecommerce" element={<ECommerce />} />
        <Route exact path="hoc" element={<WithHoc />} />
        <Route exact path="usememo" element={<MemoExample />} />
        <Route exact path="usecallback" element={<CallbackExample />} />
        <Route exact path="timercountdown" element={<CountDown />} />
        <Route exact path="statediff" element={<StateDiff />} />
        <Route exact path="singleprogress" element={<SingleProgress />} />
      </Routes>
    </div>
  );
};
