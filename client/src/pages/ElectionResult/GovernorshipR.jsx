import React from "react";
import OtherResult from "../../components/OtherResult";
import { electionData } from "../../data/data";

const GovernorshipR = () => {
  const govern = electionData.governorship
  return <>
    <OtherResult data={govern} />
  </>;
};

export default GovernorshipR;
