import { Vote } from "lucide-react";
import React, { useState } from "react";
import VoteCounted from "./VoteCounted";
import useAppContext from "../context/useAppContext";

const ConfirmVote = ({ handleConfirmVote }) => {
  const [castVote, setCastVote] = useState(false);
  const { selected } = useAppContext();
  const handleCastVote = () => {
    selected ? setCastVote(true) : setCastVote(false)
  }
  return (
    <div className="fixed flex items-center justify-center z-50 inset-0 bg-[#34405499]/60 backdrop-blur-[2px]">
      <div className="bg-white  mx-8 rounded-xl flex flex-col items-center justify-center gap-4 p-8">
        <div className="flex flex-col items-center gap-3">
          <Vote size={30} className="text-gray-700" />
          <h2 className="text-gray-900 text-1xl font-600 font-bold">
            Vote Confirmation
          </h2>
        </div>
        <p className="text-gray-600 text-sm text-center">
          Are you sure you want to vote for <br />
          <span className="text-gray-900 font-700 font-bold">
            “{selected.name}”
          </span>{" "}
          for this <br />
          Election? This action is{" "}
          <span className="font-700 text-gray-900 font-bold">Permanent</span>
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleConfirmVote()}
            className="cursor-pointer flex items-center gap-2 border border-gray-400 font-700 font-bold text-gray-900 text-sm px-4 py-2 rounded-lg"
          >
            Cancel
          
          </button>
          <button
            onClick={() => handleCastVote()}
            className="cursor-pointer flex items-center gap-2 bg-[#39FF14B2] shadow border border-gray-200 font-700 font-bold text-gray-900 text-sm px-4 py-2 rounded-lg"
          >
            Yes, Cast Vote
          
          </button>
        </div>
      </div>

      {/* Vote Counted */}
      {castVote && (
        <VoteCounted />
      )}
    </div>
  );
};

export default ConfirmVote;
