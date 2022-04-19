import "./App.css";
import { Home } from "./components/Home";
import { Route, Routes } from "react-router-dom";
import { AllRoutes } from "./routes/Routes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<AllRoutes />} />
      </Routes>
    </>
  );
}

export default App;
