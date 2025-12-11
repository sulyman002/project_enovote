import React from "react";
import OtherResult from "../../components/OtherResult";
import { electionData } from "../../data/data";

const HouseOfRepR = () => {
  const houseSen = electionData.houseofrep;
  return (
    <>
      <OtherResult data={houseSen} />
    </>
  );
};

export default HouseOfRepR;
