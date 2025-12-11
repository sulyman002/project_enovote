import React from "react";
import OtherResult from "../../components/OtherResult";
import { electionData } from "../../data/data";

const LocalGovtR = () => {
  const localG = electionData.localgov;
  return (
    <>
      <OtherResult data={localG} />
    </>
  );
};

export default LocalGovtR;
