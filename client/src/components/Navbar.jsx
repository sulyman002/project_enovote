import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { links, authLink } from "../data/data";
import logo from "../assets/evoteLogo.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const loaction = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#D9D9D9] border-b border-gray-400 shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <img src={logo} alt="evote-logo" className="w-35 md:w-40" />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          {links.map((link, index) => (
          <ul className="">
            <Link
              to={link.path}
              key={index}
              className={`cursor-pointer ${
                location.pathname === link.path ? "text-blue-400" : "text-black"
              }`}
            >
              {link.label}
            </Link>
          </ul>
        ))}
        </div>

        {/* Register Button */}
        <div className="flex items-center gap-5 text-base font-500 font-semibold">
          {authLink.map((authL, index) => (
          <div
            key={index}
            
            className=""
          >
            <Link to={authL.path} className={`cursor-pointer hidden md:block  border shadow ${authL.label === "Register" ? "bg-[#39FF14B2]" : "bg-[bg-[#D9D9D9]"} border-gray-400 text-black px-5 py-2 rounded-lg transition hover:scale-[0.9] duration-300`}>
              {authL.label}
            </Link>
            
          </div>
        ))}
        </div>

        {/* <button className="cursor-pointer hidden md:block  hover:bg-[#39FF14B2]/50 shadow text-black px-5 py-2 rounded-lg transition-all hover:scale-[0.9] duration-300">
              Register
            </button> */}

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        // <div className="md:hidden bg-white shadow px-6 py-4 animate-slideDown">
        //   <ul className="flex flex-col gap-4 font-medium">
        //     <li className="cursor-pointer hover:text-green-600">Home</li>
        //     <li className="cursor-pointer hover:text-green-600">Dashboard</li>
        //     <li className="cursor-pointer hover:text-green-600">
        //       Education Hub
        //     </li>
        //     <li className="cursor-pointer hover:text-green-600">About</li>
        //   </ul>
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-6 animate-slideDown">
          {links.map((link, index) => (
          <ul className="flex flex-col gap-4 font-medium">
            <Link
              to={link.path}
              key={index}
              className={`cursor-pointer hover:text-blue-400 ${
                location.pathname === link.path ? "text-blue-400" : "text-black"
              }`}
            >
              {link.label}
            </Link>
          </ul>
        ))}
        </div>

           
        // </div>
      )}
    </nav>
  );
};

export default Navbar;

//  <li className="cursor-pointer hover:text-green-600">Verify</li>
//           <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg">
//             Register
//           </button>


