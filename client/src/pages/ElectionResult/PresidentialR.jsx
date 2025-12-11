import React from "react";
import { electionData } from "../../data/data";
import HeaderStats from "../../components/HeaderStats";
import ElectionMap from "../../components/ElectionMap";
import OverallResults from "../../components/OverallResults";
import SecureVoteBox from "../../components/SecureVoteBox";


const PresidentialR = () => {
  const data = electionData.presidential;
  return (
    <div>
      <HeaderStats stats={data.stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">

        {/* MAP */}
        <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow">
          <h2 className="font-bold mb-2">Results By State</h2>
          <ElectionMap />
        </div>

        <div className="flex flex-col gap-4">
          <OverallResults results={data.results} />
          <SecureVoteBox />
        </div>
      </div>
    </div>
  );
};

export default PresidentialR;




