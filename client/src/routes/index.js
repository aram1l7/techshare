import { Routes, Route } from "react-router-dom";
import Login from "pages/auth/login";
import Register from "pages/auth/register";
import Landing from "components/layout/landing";
import React from "react";
import Navbar from "components/layout/navbar";
function RoutesContainer() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default RoutesContainer;
