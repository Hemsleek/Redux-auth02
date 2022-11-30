import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
