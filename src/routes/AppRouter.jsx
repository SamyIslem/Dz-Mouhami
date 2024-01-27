import React from "react";
import AppRoutes from "./Approutes";
import { BrowserRouter } from "react-router-dom";
import AvocatRouter from "./AvocatRouter";

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
