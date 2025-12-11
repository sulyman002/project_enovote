import React from "react";
import logo from "../assets/evoteLogo.svg";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IdCard, Info, Mail } from "lucide-react";
import { getItem, setItem } from "../utils/localStorage";
import { toast } from "sonner";
// import authImg from "../assets/authImg.png";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const users = getItem("userDetails") || [];
      const exists = users.some((u) => u.id === data.verificationId.trim());

      if (exists) {
        toast.error("User ID already registered. Please login.");
        return;
      }

      users.push({ id: data.verificationId.trim(), email: data.email.trim() });
      setItem("userDetails", users);

      toast.success("Account created! Please login.");
      navigate("/auth/otp");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  const date = new Date();

  const grabYear = date.getFullYear();

  return (
    <div className="mx-auto container min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image Section */}
      <div className="w-full h-full">
        <img
          //   src={authImg}
          alt="Authentication"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col items-center justify-center p-8 ">
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

        <div className="bg-[#D9D9D9] rounded-xl shadow-lg px-6 py-8 w-full max-w-md mx-auto">
          <div className="flex gap-2 mb-4 bg-[#D1CECE] rounded-md p-1">
            <div
              onClick={() => {
                navigate("/auth/verify");
              }}
              className={`flex-1 ${
                location.pathname === "/auth/verify"
                  ? "bg-white text-gray-900 shadow"
                  : ""
              } text-39FF14 py-2 rounded-md font-semibold text-center cursor-pointer`}
            >
              Verify
            </div>
            <div
              onClick={() => {
                navigate("/auth/register");
              }}
              className={`flex-1 ${
                location.pathname === "/auth/register" ? "bg-white text-gray-900 shadow" : ""
              }  py-2 rounded-md font-semibold cursor-pointer text-center`}
            >
              Register
            </div>
          </div>

          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 w-full">
              {/* First name */}
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="firstName" text-gray-700>
                  First Name
                </label>
                <input
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                  id="firstName"
                  type="text"
                  placeholder="Firstname..."
                  className="outline-none py-3 border border-gray-400 pl-2 rounded-md placeholder:text-gray-500"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              {/* Last Name */}
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="firstName" text-gray-700>
                  Last Name
                </label>
                <input
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                  id="lastName"
                  type="text"
                  placeholder="Lastname..."
                  className="outline-none py-3 border border-gray-400 pl-2 rounded-md placeholder:text-gray-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
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

            <div className="flex flex-col w-full gap-2">
              <div className="flex items-center text-gray-700">
                <p className="text-sm font-medium  flex-1">Email Address</p>
              </div>
              <div className="flex items-center justify-center gap-3 border border-gray-400  rounded-md px-2">
                <Mail size={24} className="text-gray-500" />

                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required. ",
                    validate: (value) => {
                      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      return (
                        pattern.test(value) ||
                        "Please enter a valid email address. "
                      );
                    },
                  })}
                  placeholder="Enter your email"
                  className="py-3 pl-1 rounded-md outline-0 flex-1"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <button
              type="submit"
              className={` ${
                isSubmitting
                  ? "bg-[#39FF14B2]/50 cursor-not-allowed"
                  : "bg-[#39FF14B2] cursor-pointer"
              }  w-full   text-gray-900 py-3 rounded-md font-semibold shadow`}
            >
              {isSubmitting ? "Registering" : " Register"}
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

export default Register;
