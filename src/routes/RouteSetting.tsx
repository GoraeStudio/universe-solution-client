import { Routes } from "react-router";
import { Route } from "react-router";
import Home from "../pages/Home";
import Admin from "../pages/admin";
const RouteSetting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default RouteSetting;
