import VotingDashboard from "../../components/VotingDashboard";
import { contestants } from "../../data/data";

const Governorship = () => {
  return (
    <>
      <VotingDashboard contestants={contestants} electionType="Governorship" />
    </>
  );
};

export default Governorship;
