import React, { useState } from "react";
import { ShieldCheck, ArrowLeft, Vote, ChevronRight } from "lucide-react";
import { history } from "../data/data";
import { elections } from "../data/data";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DashboardAside from "../components/DashboardAside";
import MobileDashboardMenu from "../components/MobileDashboardMenu";


const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openAside, setOpenAside] = useState(false);

  const handleOpenMobileAside = () => {
    setOpenAside(!openAside);
  };

  const isSubPage = location.pathname !== "/app/dashboard";

  return (
    <div className="">
      {isSubPage ? (
        <div className="relative flex mx-auto container ">
          <DashboardAside />

          <MobileDashboardMenu
            handleOpenMobileAside={handleOpenMobileAside}
            openAside={openAside} // pass the state
          />
          <div
            onClick={handleOpenMobileAside}
            className="fixed left-0 bottom-1/2 flex z-999 md:hidden shadow-lg w-8 h-20 bg-[#D9D9D9] rounded-r-lg items-center justify-center cursor-pointer "
          >
            <ChevronRight />
          </div>

          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      ) : (
        <>
          <div className="w-full min-h-screen py-12 mx-auto px-6 container">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div  className="flex items-center gap-3">
               <div onClick={() => navigate("/app/home")} className="">
                 <ArrowLeft size={22} className="cursor-pointer" />
               </div>
                <h1 className="md:text-2xl  font-bold">Voter Dashboard</h1>
              </div>

              <div className="flex items-center gap-2 border border-[#0B72CC]/50 shadow px-4 py-2 rounded-lg">
                <p className="text-gray-700">Registration Status : Verified</p>
                <div className="w-8 h-8 rounded-full border-8 border-[#9FF88D66]/10 bg-[#9FF88D66] flex items-center justify-center ">
                  <ShieldCheck size={16} />
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6 text-lg">Welcome, Tosin!</p>

            {/* Upcoming Elections */}
            <h2 className="text-xl font-semibold mb-4">
              Upcoming & Active Elections
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {elections.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-300 shadow-md rounded-xl overflow-hidden bg-[#D9D9D999]"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>

                    <div className="flex justify-between items-center mt-4">
                      <p className="text-blue-600 text-sm">{item.time}</p>
                      <button
                        onClick={() => navigate(`/app/dashboard/${item.route}`)}
                        className="cursor-pointer flex items-center gap-2 bg-[#39FF14B2] hover:bg-[#39FF14B2]/50 text-gray-900 text-sm px-4 py-2 rounded-lg"
                      >
                        <Vote size={16} /> Vote Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* History Section */}
            <h2 className="text-xl font-semibold mt-10 mb-4">
              Election History and Results
            </h2>

            <div className="border border-gray-300 shadow-md rounded-xl overflow-hidden bg-[#D9D9D9B2]">
              {history.map((h) => (
                <div
                  key={h.id}
                  className="flex justify-between items-center border-b border-gray-400 last:border-none p-4"
                >
                  <div>
                    <p className="font-medium">{h.title}</p>
                    <p className="text-sm text-gray-500 mt-1">{h.date}</p>
                  </div>

                  <div className="flex items-center gap-2 bg-[#39FF1466] px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-[#008E05] rounded-full"></span>
                    <p className="text-green-700 text-sm">{h.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
