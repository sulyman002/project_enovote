import React from 'react'
import { senate } from '../../data/data';
import VotingDashboard from '../../components/VotingDashboard';

const Senate = () => {
  return (
    <>
      <VotingDashboard contestants={senate} electionType="Senate" />
    </>
  )
}

export default Senate