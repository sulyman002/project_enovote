import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getItem } from "../../utils/localStorage";

const ProfileSetting = () => {
  const userDet = getItem("userDetails");
  const userDetails = userDet[0];
  console.log(userDetails);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: userDetails?.fullName || "Tosin Obi",
      email: userDetails?.email || "",
    },
  });
  useEffect(() => {
    reset({
      fullName: userDetails?.fullName,
      email: userDetails?.email,
    });
  }, [userDetails, reset]);

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="py-5 px-5 md:py-20 md:px-10 w-full bg-red-400">
      <section className="border border-gray-300 rounded-xl  shadow-sm bg-white">
        <div className="w-full border-b border-gray-400 py-2 bg-[#D9D9D9] rounded-t-xl">
          <h2 className="md:text-xl text-base text-gray-900 font-semibold px-4">
            Personal Information
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="flex flex-col gap-4 bg-[#D9D9D9] p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  {...register("fullName", { required: true })}
                  className="w-full border  border-gray-400 bg-white outline-none rounded-lg p-2"
                  placeholder="Tosin Obi"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email Address</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="w-full border border-gray-400 bg-white outline-none rounded-lg p-2"
                  placeholder="tosinobi12@gmail.com"
                />
              </div>
            </div>

            <p className="text-xs text-gray-500 ">
              NIN / Voters Card cannot be changed. For corrections please
              contact Support.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <button className="border px-5 py-2 rounded-lg bg-gray-100">
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-5 py-2 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ProfileSetting;
