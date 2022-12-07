import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";

// pages
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const AppRoutes = () => {
  const { user } = useSelector((state) => state.authReducer);

  const isLoggedIn = user !== null;
  console.log({ user, isLoggedIn });
  return (
    <Routes>
      {isLoggedIn ? (
        <>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
};

export default AppRoutes;
