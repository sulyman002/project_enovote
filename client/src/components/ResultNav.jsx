import React from "react";
import { Link, useLocation } from "react-router-dom";

// Nav Data
import { resultNavTab } from "../data/data";

const ResultNav = () => {
  const location = useLocation();

  return (
    <div className="w-full flex">
      <div className="items-center gap-6 rounded-md bg-[#D9D9D94D] p-3 hidden md:flex">
        {resultNavTab.map((link, index) => (
          <Link
            to={link.path}
            key={index}
            className={` hover:text-[#28C308]/50 font-bold ${
              link.path === location.pathname
                ? "text-[#28C308]"
                : "text-gray-600"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ResultNav;
