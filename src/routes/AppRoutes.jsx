import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import HomePage from "../components/HomePage";
import Context  from "../components/context/Context";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<Navigate to="/" />} />
        <Route path="/home" element={<Context> <HomePage /> </Context>} />
      </Routes>
    </>
  );
}

export default AppRoutes;
