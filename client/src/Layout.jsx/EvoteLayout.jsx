import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const EvoteLayout = () => {
  return (
    <div className="w-full">
      {/* Nav */}
      <Navbar />

      {/* Outlet here */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EvoteLayout;
