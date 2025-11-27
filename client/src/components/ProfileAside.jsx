import React from "react";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { accountSettings } from "../data/data";

const ProfileAside = () => {
  const location = useLocation();
  return (
    <aside className="w-80 h-screen hidden md:flex flex-col shadow border-r border-gray-300 bg-[#D9D9D999] py-6 ">
      <div className="flex-1 flex flex-col pt-8 px-5 gap-8">
        <h1 className="text-2xl md:text-3xl font-600 font-bold text-gray-900 ">
          Account Settings
        </h1>

        <div className="flex flex-col gap-6">
          {accountSettings.map((type) => {
            const Icon = Icons[type.icon];
            return (
              <Link
                key={type.id}
                to={type.route}
                className={`flex items-center gap-3 text-base font-500 font-semibold transition-colors  ${
                  location.pathname === type.route
                    ? " text-[#28C308] "
                    : " text-gray-500 "
                }`}
              >
                <Icon
                  size={24}
                  className={` ${
                    location.pathname === type.route
                      ? "text-[#28C308]"
                      : "text-gray-500"
                  } `}
                />
                <p className="">{type.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default ProfileAside;
