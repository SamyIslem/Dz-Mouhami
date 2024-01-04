import React from "react";
import AppRoutes from "./Approutes";
import { BrowserRouter } from "react-router-dom";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
