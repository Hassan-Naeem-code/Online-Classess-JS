import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../screens/authentication/login/login";
import Home from "../screens/app/Home/home";
import NotFoundView from "../screens/app/NotFoundView/NotFoundView";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
