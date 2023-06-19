import { Route, Routes } from "react-router";
import { ROUTE_CONSTANT } from "../constant/routeConstant";
import Home from "../pages/home/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path={ROUTE_CONSTANT.HOME} element={<Home />} />
    </Routes>
  );
};

export default Routers;
