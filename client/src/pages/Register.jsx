import React from "react";
import logo from "../assets/evoteLogo.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const { register } = useForm();

  return (
    <div className="mx-auto container min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image Section */}
      <div className="w-full h-full">
        <img
          src="/mnt/data/auth.PNG"
          alt="Authentication"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col items-center justify-center p-8 bg-red-300">
        <div className="flex flex-col items-center justify-center gap-3">
          <img src={logo} alt="evote-logo" className="w-35 md:w-40" />
          <h2 className="text-xl font-semibold text-center mb-4">
            SECURE VOTER PORTAL
          </h2>
          <p className="text-center text-gray-600 mb-6 text-sm">
            Welcome to the e-voting portal, please Log in or register your
            account
          </p>
        </div>

        <form className="bg-[#D9D9D9] rounded-xl shadow px-6 py-8 w-full max-w-md mx-auto">
          <div className="flex gap-2 mb-4 bg-[#D1CECE] rounded-md p-1">
            <div
              onClick={() => {
                navigate("/verify");
              }}
              className={`flex-1 ${
                location.pathname === "/verify"
                  ? "bg-white text-gray-900"
                  : null
              } text-39FF14 py-2 rounded-md font-semibold text-center cursor-pointer`}
            >
              Verify
            </div>
            <div
              onClick={() => {
                navigate("/register");
              }}
              className={`flex-1 ${
                location.pathname === "/register"
                  ? "bg-white text-gray-900"
                  : null
              }  py-2 rounded-md font-semibold cursor-pointer text-center`}
            >
              Register
            </div>
          </div>

          <label className="text-sm font-medium text-gray-700">
            Verification ID
          </label>
          <input
            type="text"
            placeholder="Verification ID"
            className="w-full mt-1 mb-4 p-3 rounded-md border border-gray-300"
          />

          <button className="w-full bg-green-500 text-white py-3 rounded-md font-semibold shadow">
            Verify
          </button>
        </form>

        <p className="text-center text-gray-400 text-xs mt-6">
          © 2025 E-VOTE SYSTEM
        </p>
      </div>
    </div>
  );
};

export default Register;
