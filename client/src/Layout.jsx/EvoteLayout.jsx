import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
// import { useLocation } from "react-router-dom";

const EvoteLayout = () => {

  return (
    <div className="w-full">
      
      <Navbar />

      {/* Outlet here */}
      <Outlet />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default EvoteLayout;
