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
import CommentBox from "../components/Comment/CommentBox";
import { AutoBatching } from "../components/AutomaticBatching/AutoBatching";
import { AppAccordin } from "../components/FolderStructure/Accordin";
import { SplashScreen } from "../components/Splash Screen/SplashScreen";
import { Debouncing } from "../components/Debouncing/Debouncing";
import { Refs } from "../components/RefsReact/Refs";
import { ConsumeApiData } from "../components/CustomDataHook/ConsumeApiData";
import { FormValdiation } from "../components/CustomDataValidation/FormValdiation";

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
        <Route exact path="comment-box" element={<CommentBox />} />
        <Route exact path="custom-pagination" element={<CustomPagination />} />
        <Route exact path="ecommerce" element={<ECommerce />} />
        <Route exact path="hoc" element={<WithHoc />} />
        <Route exact path="usememo" element={<MemoExample />} />
        <Route exact path="usecallback" element={<CallbackExample />} />
        <Route exact path="timercountdown" element={<CountDown />} />
        <Route exact path="statediff" element={<StateDiff />} />
        <Route exact path="singleprogress" element={<SingleProgress />} />
        <Route exact path="react18" element={<AutoBatching />} />
        <Route exact path="folderstruct" element={<AppAccordin />} />
        <Route exact path="splashscreen" element={<SplashScreen />} />
        <Route exact path="deboucing" element={<Debouncing />} />
        <Route exact path="refs" element={<Refs />} />
        <Route exact path="customdatahook" element={<ConsumeApiData />} />
        <Route exact path="formvalidation" element={<FormValdiation />} />
      </Routes>
    </div>
  );
};
