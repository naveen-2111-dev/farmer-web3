import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  FarmerAuth,
  FarmerConsole,
  FarmerLogin,
  Fert,
  Home,
  Other,
  Veg,
} from "./pages/index";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/auth" element={<FarmerAuth />} />
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/fert" element={<Fert />} />
        <Route path="/other" element={<Other />} />
        <Route path="/console" element={<FarmerConsole />} />
        <Route path="/log" element={<FarmerLogin />} />
      </Routes>
    </div>
  );
};

export default App;
