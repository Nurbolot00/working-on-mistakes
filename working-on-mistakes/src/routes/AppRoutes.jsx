import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import LoginPage from "../containers/Login.Page";
import UsersPage from "../containers/Users.Page";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/login"} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin/*" element={<Outlet />}>
        <Route path="users" element={<UsersPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
