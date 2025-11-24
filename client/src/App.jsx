import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import EvoteLayout from "./Layout.jsx/EvoteLayout";
import Verify from "./pages/Verify";
import EducationHub from "./pages/EducationHub";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<EvoteLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="education-hub" element={<EducationHub />} />
          <Route path="about" element={<About />} />
          <Route path="verify" element={<Verify />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
