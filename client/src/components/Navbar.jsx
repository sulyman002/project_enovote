import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { links } from "../data/data";
import logo from "../assets/evoteLogo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import profileAvatar from "../assets/profileAvatar.png";
import { setItem } from "../utils/localStorage";
import { toast } from "sonner";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };
  const location = useLocation();

  const handleLogout = () => {
    setItem("user", null);
    navigate("/verify");
    toast.success("Logout successful. Stay safe.");
  };

  return (
    <nav className="relative w-full bg-[#D9D9D9] border-b border-gray-400 shadow z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div onClick={() => navigate("/app/home")} className="">
          <img src={logo} alt="evote-logo" className="w-35 md:w-40" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {links.map((link, index) => (
            <ul key={index} className="">
              <Link
                to={link.path}
                className={`cursor-pointer ${
                  location.pathname === link.path
                    ? "text-blue-400"
                    : "text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            </ul>
          ))}

          {/* profile icon */}
          <div
            onClick={() => {
              navigate("/app/profile");
            }}
            className="cursor-pointer ml-10 flex items-center justify-center bg-[#F0ECEB] rounded-full w-10 h-10 text-base font-500 text-center text-[#5C2E1B] font-medium  "
          >
            <img
              src={profileAvatar}
              alt="profile-image"
              className="w-full h-full"
            />
          </div>

          <button
            onClick={handleLogout}
            className="cursor-pointer hidden md:block  border bg-[#39FF14B2] shadow border-gray-400 text-gray-900 px-5 py-2 rounded-lg transition hover:scale-[0.9] duration-300"
          >
            Logout
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={handleOpen}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-18 left-0 right-0 md:hidden bg-white shadow px-6 py-4 space-y-8 animate-slideDown">
          <div className="flex items-center gap-4.5  ">
            <div
              onClick={() => {
                handleOpen();
                navigate("/app/profile");
              }}
              className="cursor-pointer flex items-center justify-center bg-[#F0ECEB] rounded-full w-10 h-10 text-base font-500 text-center text-[#5C2E1B] font-medium  "
            >
              <img
                src={profileAvatar}
                alt="profile-image"
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-1 text-xs ">
              <p className="text-gray-900 text-xl font-medium ">User name</p>
              <p className="text-base text-gray-600">Secure Voting Platform</p>
            </div>
          </div>

          {links.map((link, index) => (
            <ul className="flex flex-col gap-4 font-medium">
              <Link
                to={link.path}
                key={index}
                onClick={handleOpen}
                className={`cursor-pointer hover:text-blue-400 ${
                  location.pathname === link.path
                    ? "text-blue-400"
                    : "text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            </ul>
          ))}

          <button
            onClick={handleLogout}
            className="cursor-pointer w-full border bg-[#39FF14B2] shadow border-gray-400 text-gray-900 px-5 py-2 rounded-lg transition hover:scale-[0.9] duration-300"
          >
            Logout
          </button>
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
