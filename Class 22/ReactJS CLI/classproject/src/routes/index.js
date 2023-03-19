import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../screens/authentication/login/login";
import Home from "../screens/app/Home/home";
import NotFoundView from "../screens/app/NotFoundView/NotFoundView";

function AppRoutes() {
  const currentLoginUser = useSelector(
    ({ user_authenticate }) => user_authenticate?.userLogin
  );
  return (
    <BrowserRouter>
      <Routes>
        {currentLoginUser ? (
          <>
            <Route path="/" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
          </>
        )}
        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
