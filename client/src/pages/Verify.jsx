import React from "react";
import logo from "../assets/evoteLogo.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IdCard, Info } from "lucide-react";
import { toast } from "sonner";
import { getItem, setItem } from "../utils/localStorage";

const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = (data) => {
    const users = getItem("userDetails") || "[]";
    const user = users.find((u) => u.id === String(data.verificationId));

    if (!user) {
      toast.error("User not found. Please register first.");
      return;
    }
    setItem("user", { id: data.verificationId });

    navigate("/app/home");
    toast.success("you logged in successfully!");
  };

  const date = new Date();

  const grabYear = date.getFullYear();

  return (
    <div className="mx-auto container min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image Section */}
      <div className="w-full h-full">
        <img
          // src="/mnt/data/auth.PNG"
          alt="Authentication"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col items-center justify-center p-8 bg-red-300">
        <div className="flex flex-col items-center justify-center gap-3">
          <img src={logo} alt="evote-logo" className="w-36 md:w-40" />
          <h2 className="text-xl font-semibold text-center mb-4">
            SECURE VOTER PORTAL
          </h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Welcome to the e-voting portal, please Log in or register your
            account
          </p>
        </div>

        <div className="bg-[#D9D9D9] rounded-xl shadow-lg px-6 py-8 w-full max-w-md mx-auto">
          <div className="flex gap-2 mb-4 bg-[#D1CECE] rounded-md p-1">
            <div
              onClick={() => {
                navigate("/verify");
              }}
              className={`flex-1 ${
                location.pathname === "/verify" ? "bg-white text-gray-900" : ""
              } text-39FF14 py-2 rounded-md font-semibold text-center cursor-pointer`}
            >
              Verify
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
              className={`flex-1 ${
                location.pathname === "/" ? "bg-white text-gray-900" : ""
              }  py-2 rounded-md font-semibold cursor-pointer text-center`}
            >
              Register
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col w-full gap-2">
              <div className="flex items-center text-gray-700">
                <p className="text-sm font-medium  flex-1">Verification ID</p>
                <Info size={14} className="" />
              </div>
              <div className="flex items-center justify-center gap-3 border border-gray-400  rounded-md px-2">
                <IdCard size={24} className="text-gray-500" />

                <input
                  type="text"
                  inputMode="numeric"
                  {...register("verificationId", {
                    required: "Verification ID is required",
                    minLength: {
                      value: 11,
                      message: "ID must be 11 digits",
                    },
                    maxLength: {
                      value: 11,
                      message: "ID must be 11 digits",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Only numbers are allowed",
                    },
                  })}
                  placeholder="Verification ID"
                  className="py-3 pl-1 rounded-md outline-0 flex-1"
                />
              </div>
              {errors.verificationId && (
                <p className="text-red-500 text-sm">
                  {errors.verificationId.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={` ${
                isSubmitting
                  ? "bg-[#39FF14B2]/50 cursor-not-allowed"
                  : "bg-[#39FF14B2] cursor-pointer"
              }  w-full   text-white py-3 rounded-md font-semibold shadow`}
            >
              {isSubmitting ? "Verifying" : " Verify"}
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

export default Verify;
