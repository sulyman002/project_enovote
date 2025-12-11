import React from "react";
import logo from "../assets/evoteLogo.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IdCard, Info, Mail } from "lucide-react";
import { getItem, setItem } from "../utils/localStorage";
import { toast } from "sonner";
// import authImg from "../assets/authImg.png";

const Otp = () => {
  const navigate = useNavigate();

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
          alt="otp"
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
            You will receive a One-Time Password in your provided email.
          </p>
        </div>

        <div className="bg-[#D9D9D9] rounded-xl shadow-lg px-6 py-8 w-full max-w-md mx-auto">
         

          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
           
            

         

            <button
              type="submit"
              className={` ${
                isSubmitting
                  ? "bg-[#39FF14B2]/50 cursor-not-allowed"
                  : "bg-[#39FF14B2] cursor-pointer"
              }  w-full   text-gray-900 py-3 rounded-md font-semibold shadow`}
            >
              {isSubmitting ? "Processing" : " Confirm"}
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
