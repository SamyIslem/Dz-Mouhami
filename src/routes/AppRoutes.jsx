import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, LogIn, SignUp } from "../pages";
import { DefaultLayouts, EmptyLayout } from "@/layouts";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayouts />}>
          <Route element={<Home />} path="/"></Route>
        </Route>

        <Route element={<EmptyLayout />}>
          <Route element={<LogIn />} path="/login"></Route>
          <Route element={<SignUp />} path="/signup"></Route>
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
