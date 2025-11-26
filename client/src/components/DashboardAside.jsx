import React from "react";
import { electType } from "../data/data";
import * as Icons from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DashboardAside = () => {
  const location = useLocation();
  return (
    <aside className="w-70 h-screen hidden md:flex flex-col shadow border-r border-gray-300 bg-[#D9D9D999] py-6 ">
      <div className="flex-1 flex flex-col pt-8 px-5 gap-8">
        <div className="flex items-center gap-4.5 ">
          <p className="flex items-center justify-center bg-[#F0ECEB] rounded-full w-10 h-10 text-base font-500 text-center text-[#5C2E1B] font-medium  ">
            AB
          </p>
          <div className="flex flex-col gap-2 text-xs ">
            <p className="text-gray-900 text-xl font-bold ">User name</p>
            <p className="text-base text-gray-600">Secure Voting Platform</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {electType.map((type) => {
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

      <div className="p-5 bg-[#CBC8C8B2] flex flex-col items-center justify-center gap-3 mx-5 rounded-2xl">
        <Icons.ShieldCheck size={28} className="text-[#008E0599]" />
        <h2 className="font-600 font-semibold text-gray-900">Your Vote is Secure</h2>
        <p className="text-gray-600 text-center">All transmission and encrypted and confirmed</p>
      </div>
    </aside>
  );
};

export default DashboardAside;
