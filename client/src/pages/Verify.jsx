import React from "react";

const Verify = () => {
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
      <div className="flex flex-col justify-center p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-700">
          E-VOTE✔
        </h1>
        <h2 className="text-xl font-semibold text-center mb-4">
          SECURE VOTER PORTAL
        </h2>
        <p className="text-center text-gray-600 mb-6 text-sm">
          Welcome to the e-voting portal, please Log in or register your account
        </p>

        <div className="bg-gray-100 rounded-xl shadow p-6 w-full max-w-md mx-auto">
          <div className="flex gap-2 mb-4">
            <button className="flex-1 bg-green-500 text-white py-2 rounded-md font-semibold shadow">
              Verify
            </button>
            <button className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md font-semibold">
              Register
            </button>
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
        </div>

        <p className="text-center text-gray-400 text-xs mt-6">
          © 2025 E-VOTE SYSTEM
        </p>
      </div>
    </div>
  );
};

export default Verify;
