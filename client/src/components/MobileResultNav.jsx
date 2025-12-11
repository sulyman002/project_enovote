import { ArrowDown, ArrowDownToDot, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Nav Data
import { resultNavTab } from "../data/data";
import { Link, useLocation } from "react-router-dom";

const MobileResultNav = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`
        w-full flex items-center justify-center md:hidden
        transition-all duration-300
        ${isSticky ? "fixed top-0 left-0 bg-white/50 z-50 py-2 shadow-md" : ""}
      `}
    >
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-center py-1 px-8 bg-[#D9D9D9] rounded-4xl shadow-lg"
      >
        <ChevronDown className="text-gray-900" />
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden z-50 flex flex-col"
          >
            {resultNavTab.map((link, index) => (
              <Link
                to={link.path}
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={` px-4 py-3 hover:text-[#28C308]/50 font-bold ${
                  link.path === location.pathname
                    ? "text-[#28C308]"
                    : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* {resultNavTab.map((item, index) => (
              <div
                key={index}
                className=" hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  console.log(item); // handle click
                  setIsOpen(false); // close dropdown after click
                }}
              >
                {item}
              </div>
            ))} */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileResultNav;
