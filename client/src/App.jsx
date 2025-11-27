import React from "react";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import EvoteLayout from "./Layout.jsx/EvoteLayout";
import Verify from "./pages/Verify";
import EducationHub from "./pages/EducationHub";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Register from "./pages/Register";
import { Toaster } from "sonner";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import Presidential from "./pages/Dashboard/Presidential";
import Senate from "./pages/Dashboard/Senate";
import HouseOfReps from "./pages/Dashboard/HouseOfReps";
import LocalGovt from "./pages/Dashboard/LocalGovt";
import Governorship from "./pages/Dashboard/Governorship";
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import ProfileSetting from "./pages/AccountSettings/ProfileSetting";
import Notifications from "./pages/AccountSettings/Notifications";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route
          path="verify"
          element={
            <PublicRoute>
              <Verify />
            </PublicRoute>
          }
        />
        <Route
          path="/"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="app"
          element={
            <ProtectedRoute>
              <EvoteLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="presidential" replace />} />
            <Route path="presidential" element={<Presidential />} />
            <Route path="governorship" element={<Governorship />} />
            <Route path="senate" element={<Senate />} />
            <Route path="house-of-rep" element={<HouseOfReps />} />
            <Route path="local-govt" element={<LocalGovt />} />
          </Route>
          <Route path="education-hub" element={<EducationHub />} />
          <Route path="about" element={<About />} />
          <Route path="results" element={<Results />} />
          <Route path="profile" element={<Profile />}>
            <Route path="profile-setting" element={<ProfileSetting />} />
            <Route path="notification" element={<Notifications />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
