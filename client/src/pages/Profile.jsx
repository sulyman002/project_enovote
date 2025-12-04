import React from "react";
import { Outlet } from "react-router-dom";
import ProfileAside from "../components/ProfileAside";

const Profile = () => {
  return (
    <div className="flex mx-auto container">
      <ProfileAside />

      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
