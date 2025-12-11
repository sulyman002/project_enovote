import React from "react";
import Home from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import EvoteLayout from "./Layout.jsx/EvoteLayout";

import { Toaster } from "sonner";

// Routes
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

// Pages
import Verify from "./pages/Verify";
import EducationHub from "./pages/EducationHub";
import About from "./pages/About";
import Register from "./pages/Register";
import Results from "./pages/Results";
import Profile from "./pages/Profile";
import Biometric from "./pages/Biometric";
import VotePage from "./pages/VotePage";

// Vote
import Presidential from "./pages/Vote/Presidential";
import Senate from "./pages/Vote/Senate";
import HouseOfReps from "./pages/Vote/HouseOfReps";
import LocalGovt from "./pages/Vote/LocalGovt";
import Governorship from "./pages/Vote/Governorship";

// setting
import ProfileSetting from "./pages/AccountSettings/ProfileSetting";
import Notifications from "./pages/AccountSettings/Notifications";

// result
import PresidentialR from "./pages/ElectionResult/PresidentialR";
import GovernorshipR from "./pages/ElectionResult/GovernorshipR";
import SenateR from "./pages/ElectionResult/SenateR";
import HouseOfRepR from "./pages/ElectionResult/HouseOfRepR";
import LocalGovtR from "./pages/ElectionResult/LocalGovtR";

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
          <Route path="education-hub" element={<EducationHub />} />
          <Route path="biometric" element={<Biometric />} />
          <Route path="about" element={<About />} />

          {/* Vote */}
          <Route path="vote" element={<VotePage />}>
            <Route index element={<Navigate to="presidential" replace />} />
            <Route path="presidential" element={<Presidential />} />
            <Route path="governorship" element={<Governorship />} />
            <Route path="senate" element={<Senate />} />
            <Route path="house-of-rep" element={<HouseOfReps />} />
            <Route path="local-govt" element={<LocalGovt />} />
          </Route>

          {/* Result */}
          <Route path="results" element={<Results />}>
            <Route index element={<Navigate to="presidential" replace />} />
            <Route path="presidential" element={<PresidentialR />} />
            <Route path="governorship" element={<GovernorshipR />} />
            <Route path="senate" element={<SenateR />} />
            <Route path="Houseofrep" element={<HouseOfRepR />} />
            <Route path="localgov" element={<LocalGovtR />} />
          </Route>
          {/* Profile */}
          <Route path="profile" element={<Profile />}>
            <Route index element={<Navigate to="profile-setting" replace />} />
            <Route path="profile-setting" element={<ProfileSetting />} />
            <Route path="notification" element={<Notifications />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
