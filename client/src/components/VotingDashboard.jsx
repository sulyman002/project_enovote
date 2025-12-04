import React, { useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import ConfirmVote from "../components/ConfirmVote.jsx";
import useAppContext from "../context/useAppContext.js";

const VotingDashboard = ({ contestants, electionType }) => {
  // const [selected, setSelected] = useState(null);
  const [progress, setProgress] = useState(0);
  const { setStep, step, setSelected, selected } = useAppContext();

  const [confirmModal, setConfirmModal] = useState(false);

  const intervalRef = useRef(null);

  const handleProgress = () => {
    setProgress(0);
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 50) {
          clearInterval(intervalRef.current);
          return 50;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleSelectedContestant = (contestant) => {
    setSelected(contestant);
    setStep(contestant ? 1 : 0);
    handleProgress();
  };

  const handleConfirmVote = () => {
    setConfirmModal(!confirmModal);
  };

  return (
    <div className="flex flex-col relative min-h-screen">
      <div className="p-5 md:py-20 md:px-10 flex flex-col gap-8 mb-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {electionType} Election 2025
          </h1>
          <p className="text-gray-500 mb-6">
            Select a candidate below to Cast your Vote
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="text-base font-600 text-gray-700 font-medium mb-1">{`Step ${step}/2 : Select Candidate`}</p>

          <div className="w-full bg-gray-200 h-3 rounded mb-6">
            <div
              className="bg-[#0B72CC] h-3 rounded transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
          {contestants.map((contestant) => (
            <div
              key={contestant.id}
              onClick={() => handleSelectedContestant(contestant)}
              className={`rounded-lg p-6 bg-[#E9E9E9] cursor-pointer transition 
              ${
                selected?.id === contestant.id
                  ? "border-4  border-[#39FF14] scale-101"
                  : "border-2 border-transparent hover:border-gray-300 hover:scale-102"
              }`}
            >
              <img
                src={contestant.img}
                alt={contestant.name}
                className="w-full h-70 object-cover rounded mb-3"
              />
              <div className="w-full flex items-center mt-4">
                <div className="flex flex-col flex-1">
                  <p className="font-semibold text-gray-900">
                    {contestant.name}
                  </p>
                  <p className="text-sm text-gray-500">{contestant.party}</p>
                </div>
                <div className="h-10 w-10 border-2 p-1 border-gray-500 rounded-full">
                  <img
                    src={contestant.partyLogo}
                    alt={contestant.name}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex  absolute bottom-0 left-0 right-0 bg-[#D9D9D999]  p-6">
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-sm text-gray-600">You have selected: </p>
          <p className="font-700 font-bold text-gray-900 text-1xl">
            {selected ? selected.name : "No candidate selected"}
          </p>
        </div>
        <button
          disabled={!selected}
          onClick={() => handleConfirmVote()}
          className={` ${
            !selected
              ? "cursor-not-allowed bg-[#39FF14B2]/40 "
              : "cursor-pointer bg-[#39FF14B2] hover:bg-[#39FF14B2]/50"
          }  flex items-center gap-2  font-700 font-bold text-gray-900 text-sm px-4 py-2 rounded-lg"`}
        >
          Confirm Your Vote
          <ChevronRight size={20} />
        </button>
      </div>

      {/* confirm modal */}
      {confirmModal && (
        <ConfirmVote
          selected={selected}
          handleConfirmVote={handleConfirmVote}
        />
      )}
    </div>
  );
};

export default VotingDashboard;
