import React from "react";
import { Route, Routes } from "react-router-dom";
import { Avocats, DetailsAvocats, Home, LogIn, SignUp } from "@/pages";
import { DefaultLayouts, EmptyLayout } from "@/layouts";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayouts />}>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Avocats />} path="/avocats"></Route>
          <Route element={<DetailsAvocats />} path="/avocats/:id"></Route>
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
