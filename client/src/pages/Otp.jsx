import React, { useRef } from "react";
import logo from "../assets/evoteLogo.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Info } from "lucide-react";

const Otp = () => {
  const navigate = useNavigate();
  const inputs = useRef([]); // ✅ MUST BE ARRAY
  const boxes = [1, 2, 3, 4];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const handleChange = (e, index) => {
    const value = e.target.value;

    // allow digits only
    if (!/^\d?$/.test(value)) return;

    // update RHF
    setValue(`otp${index + 1}`, value);

    // move to next
    if (value && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();

    // block non-digits
    if (!/^\d+$/.test(paste)) return;

    const digits = paste.slice(0, 4).split("");

    digits.forEach((digit, i) => {
      setValue(`otp${i + 1}`, digit);
      inputs.current[i].value = digit;
    });

    // move focus to last filled box
    const nextIndex = digits.length - 1;
    if (inputs.current[nextIndex]) {
      inputs.current[nextIndex].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const onSubmit = (data) => {
    const otp = `${data.otp1}${data.otp2}${data.otp3}${data.otp4}`;
    console.log("OTP:", otp);

    if (otp.length === 4) {
      navigate("/auth/verify");
    }
  };

  const grabYear = new Date().getFullYear();

  return (
    <div className="mx-auto container min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image Section */}
      <div className="w-full h-full">
        <img alt="otp" className="w-full h-full object-cover" />
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center p-8">
        <div className="flex flex-col items-center gap-3">
          <img src={logo} alt="evote-logo" className="w-35 md:w-40" />
          <h2 className="text-xl font-semibold text-center mb-4">
            SECURE VOTER PORTAL
          </h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            You will receive a One-Time Password in your provided email.
          </p>
        </div>

        <div className="bg-[#D9D9D9] rounded-xl shadow-lg px-6 py-8 w-full max-w-md mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center gap-6"
          >
            <div className="relative flex items-center justify-center w-full">
              <p className="font-600 font-semibold text-gray-900 text-1xl md:text-2xl ">
                OTP (One-Time Password)
              </p>
              <div className="absolute right-0 ">
                <Info size={14} />
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 w-full ">
              {boxes.map((num, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  {...register(`otp${num}`, { required: true })}
                  ref={(el) => (inputs.current[index] = el)}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  className="h-18 w-18 outline-0 border border-gray-400 rounded-md text-center 
                 bg-[#C7C4C4] focus:border-blue-500"
                />
              ))}
            </div>

            <p className="text-gray-600">
              Didn't receive OTP?{" "}
              <span className="font-600 font-bold cursor-pointer text-gray-800">Send Again</span>
            </p>

            <button
              type="submit"
              className={`${
                isSubmitting
                  ? "bg-[#39FF14B2]/50 cursor-not-allowed"
                  : "bg-[#39FF14B2] cursor-pointer"
              } w-full text-gray-900 py-3 rounded-md font-semibold shadow`}
            >
              {isSubmitting ? "Processing" : "Confirm"}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          © {grabYear} E-VOTE SYSTEM
        </p>
      </div>
    </div>
  );
};

export default Otp;
