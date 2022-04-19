import { InfiniteScroll } from "../components/InfiniteScroll/InfiniteScroll";
import { Route, Routes } from "react-router-dom";
import { CustomPagination } from "../components/CustomPagination/CustomPagination";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          exact
          path="infinite-scroll-custom"
          element={<InfiniteScroll />}
        />
        <Route exact path="custom-pagination" element={<CustomPagination />} />
      </Routes>
    </div>
  );
};
