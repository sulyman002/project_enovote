import { Copy, Printer, Vote } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import confirm from "../assets/confirm.png";
import useAppContext from "../context/useAppContext";
import { toast } from "sonner";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";

const VoteCounted = () => {
  const { setStep, step, selected } = useAppContext();
  const [progress, setProgress] = useState(50);
  const printRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    let value = 50;
    const interval = setInterval(() => {
      value += 10;
      setProgress(value);
      setStep(2);
      if (value >= 100) clearInterval(interval);
    }, 200); // 0.2s = 10%

    return () => clearInterval(interval);
  }, [setStep]);

  const encryptedCode = "3br3ihr3n3lr3lkllhkwjlw";

  const date = new Date();
  const dateSubmitted = date.toLocaleDateString();
  const timeSubmitted = date.toLocaleTimeString();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });
  return (
    <div className="fixed flex items-center justify-center z-50 inset-0 bg-[#34405499]/60 backdrop-blur-[2px]">
      <div
        ref={printRef}
        className="bg-white  mx-8 my-6 rounded-xl flex flex-col items-center justify-center  p-8"
      >
        <div className="flex flex-col gap-1 w-full">
          <p className="text-base font-600 text-gray-700 font-medium mb-1">{`Step ${step}/2 : Voting Completed! Congratulations`}</p>

          <div className="w-full bg-gray-200 h-3 rounded mb-6">
            <div
              className="bg-[#0B72CC] h-3 rounded transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex p-3 items-center w-20 h-20 md:h-50 md:w-50 justify-center">
          <img src={confirm} alt="confirm icon" />
        </div>

        <div className="flex items-center flex-col justify-center text-center">
          <h1 className="text-xl md:text-2xl font-700 font-bold">
            YOUR VOTE HAS BEEN COUNTED
          </h1>
          <p className="text-center text-gray-600">
            Thank you {selected?.name || "user name"}, for Participating in the{" "}
            {selected.electionType}
          </p>
        </div>

        {/* CONFIRMATION CARD */}
        <div className="border border-gray-300 rounded-lg mt-6 p-4 bg-[#D9D9D966] shadow">
          <h3 className="font-semibold mb-2 text-gray-900 border-b border-gray-400 pb-3">
            Confirmation Details
          </h3>

          <div className="flex justify-between py-2 border-b border-gray-400">
            <span className="text-gray-600">Election</span>
            <span className="font-medium text-gray-700">
              2025 {selected?.electionType} Election
            </span>
          </div>

          <div className="flex justify-between py-3 border-b border-gray-400 gap-16">
            <span className="text-gray-600">Date & Time Submitted</span>
            <span className="font-medium text-gray-700">
              {dateSubmitted} at {timeSubmitted}
            </span>
          </div>

          <div className="flex justify-between py-2">
            <div className="">
              <p className="text-gray-600">Encrypted Confirmation Code</p>
              <p className="font-mono text-sm text-green-600">
                {encryptedCode}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (encryptedCode) {
                    navigator.clipboard.writeText(encryptedCode);
                    toast.success("code copied!");
                  }
                }}
                className="text-green-600 cursor-pointer flex items-center gap-1 bg-[#008E0512] text-sm px-2 py-1 rounded"
              >
                <Copy size={14} className="" /> <span>Copy</span>
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-2">
          This code above is anonymous and encrypted, <br />generated as proof of your
          submission.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={() => navigate("/app/dashboard")}
            className="cursor-pointer bg-[#39FF14B2] font-500 font-medium border border-gray-100 shadow hover:bg-[#39FF14B2]/60 text-gray-900 px-4 py-2 rounded"
          >
            Return to Dashboard
          </button>
          <button onClick={handlePrint} className="border px-4 py-2 rounded bg-[#D9D9D966] font-500 font-medium hover:bg-[#D9D9D966]/80 border-gray-300 flex items-center gap-2 text-gray-900">
            <Printer size={14} />
            <span>Print Confirmation</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteCounted;
