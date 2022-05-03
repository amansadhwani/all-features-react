import { InfiniteScroll } from "../components/InfiniteScroll/InfiniteScroll";
import { InfiniteScrollItem } from "../components/InfiniteScroll/InfiniteScrollItem";
import { Route, Routes } from "react-router-dom";
import { CustomPagination } from "../components/CustomPagination/CustomPagination";
import { ECommerce } from "../components/ECommerce/ECommerce";
import WithHoc from "../components/Hoc/HigherOrderComponent";
import MemoExample from "../components/UseMemo/MemoExample";
import { CallbackExample } from "../components/UseMemo/CallbackExample";

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
      </Routes>
    </div>
  );
};
