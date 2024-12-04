import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/client/HomePage";
import LoginPage from "../pages/client/LoginPage";
import DetailsPage from "../pages/client/DetailsPage";

function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="/products/:id" element={<DetailsPage />}></Route>
    </Routes>
  );
}

export default UserRouter;
