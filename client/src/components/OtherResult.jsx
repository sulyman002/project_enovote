import React from "react";
import HeaderStats from "../components/HeaderStats";
import OverallResults from "../components/OverallResults";
import SecureVoteBox from "../components/SecureVoteBox";

const OtherResult = ({ data }) => {
  return (
    <div>
      <HeaderStats stats={data.stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {/* Instead of empty map space, results goes here */}
        <OverallResults results={data.results} />

        <SecureVoteBox />
      </div>
    </div>
  );
};

export default OtherResult;
