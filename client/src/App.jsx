import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import EvoteLayout from "./Layout.jsx/EvoteLayout";
import Verify from "./pages/Verify";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EvoteLayout />}>
          <Route index element={<Home />} />
          <Route path="verify" element={<Verify />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
