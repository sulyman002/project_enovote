import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ResultNav from '../components/ResultNav'
import { electionData } from '../data/data'

const Results = () => {

  const location = useLocation();

  const current = location.pathname === "/app/results/" ? "presidential" : location.pathname.replace("/app/results/", "");
  const currentData = electionData[current];
  console.log(currentData);
  

  return (
    <div className='flex flex-col gap-4 py-8 mx-auto container w-full px-5 md:px-0'>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">{currentData?.title}</h1>
      <p className="text-gray-500 text-sm">
        Last Updated: {currentData?.lastUpdated}
      </p>
      </div>
      {/* Nav */}
     <ResultNav />
     {/* Outlet */}
      <Outlet />
      
    </div>
  )
}

export default Results