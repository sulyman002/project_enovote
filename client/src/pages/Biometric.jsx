import React from "react";
import biometricImg from "../assets/biometricImg.jpg";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Biometric = () => {
  const navigate = useNavigate();
  return (
    <div className="mx-auto container flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center gap-10 w-2xl mx-5">
        <div className="md:w-100 w-full">
          <img
            src={biometricImg}
            alt="biometric-icon"
            className="w-full h-full rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-1xl md:text-2xl font-600 font-semibold text-gray-900 text-center">
            Biometric Authentication is <br />
            Coming Soon!!!
          </h3>
          <p className="text-gray-600 text-base text-center">
            An Extra layer of security is being added to make your vote and data
            as secure as possible. This feature is under development and will be
            available for use in the future.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={async () => {
              toast.success("Got it! We'll notify you once it's ready.");
              await new Promise((resolve) => setTimeout(resolve, 1500));
              navigate("/app/home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="cursor-pointer bg-[#39FF14B2] shadow-md text-gray-90 font-500 font-semibold px-5 py-2 rounded-lg"
          >
            Notify me when ready
          </button>
          <button onClick={() => {
            navigate("/app/home");
            window.scrollTo({top: 0, behavior: "smooth"})
          }} className="cursor-pointer border border-gray-100 px-5 py-2 rounded-lg font-500 font-semibold text-gray-900 bg-[#D9D9D9]">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Biometric;
