import { ShieldCheck } from "lucide-react";
import React from "react";

const SecureVoteBox = () => {
  return (
    <div className="p-5 bg-[#CBC8C8B2] flex flex-col items-center justify-center gap-3 mx-5 rounded-2xl">
      <ShieldCheck size={28} className="text-[#008E0599]" />
      <h2 className="font-600 font-semibold text-gray-900">
        Your Vote is Secure
      </h2>
      <p className="text-gray-600 text-center">
        All transmission and encrypted and confirmed
      </p>
    </div>
  );
};

export default SecureVoteBox;
