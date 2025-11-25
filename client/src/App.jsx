import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import EvoteLayout from "./Layout.jsx/EvoteLayout";
import Verify from "./pages/Verify";
import EducationHub from "./pages/EducationHub";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Register from "./pages/Register";
import { Toaster } from "sonner";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

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
        <Route path="/" element={<Register />} />
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
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="education-hub" element={<EducationHub />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
