import React from "react";
import { Navigate } from "react-router-dom";
import { getItem } from "../utils/localStorage.js";

const PublicRoute = ({ children }) => {
  const userId = getItem("user");

  if (userId) {
    return <Navigate to="/app/home" replace />;
  }
  return children;
};

export default PublicRoute;
