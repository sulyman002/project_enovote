import React from "react";
import OtherResult from "../../components/OtherResult";
import { electionData } from "../../data/data";

const SenateR = () => {
  const senate = electionData.senate
  return <>
    <OtherResult data={senate} />
  </>;;
};

export default SenateR;


