import { ArrowDown, ArrowDownToDot, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileResultNav = ({ isSticky }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const items = ["Presidential", "Governorship", "Senate", "House"];
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
            className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-lg overflow-hidden z-50"
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  console.log(item); // handle click
                  setIsOpen(false); // close dropdown after click
                }}
              >
                {item}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileResultNav;
