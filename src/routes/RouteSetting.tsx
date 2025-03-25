import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "../pages/Home";
const RouteSetting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RouteSetting;
