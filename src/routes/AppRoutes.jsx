import React from "react";
import { Route, Routes } from "react-router-dom";
import { Avocats, DetailsAvocats, Home, LogIn, SignUp } from "@/pages";
import { DefaultLayouts, EmptyLayout } from "@/layouts";
import Sidebar from "@/pages/LawyerAdmin/Components/Sidebar";
import TopBar from "@/pages/LawyerAdmin/Components/TopBar";
import Dashboard from "@/pages/LawyerAdmin/Pages/Dashboard";
import Ratings from "@/pages/LawyerAdmin/Pages/Ratings";
import Appointments from "@/pages/LawyerAdmin/Pages/Appointments";
import Payments from "@/pages/LawyerAdmin/Pages/Payments";
import Help from "@/pages/LawyerAdmin/Pages/Help";
import Profile from "@/pages/LawyerAdmin/Pages/Profile";
import Articles from "@/pages/LawyerAdmin/Pages/Articles";
import Calender from "@/pages/LawyerAdmin/Pages/Calender";
import Parameters from "@/pages/LawyerAdmin/Pages/Parameters";

const LawyerRoutes = () => {
  return (
    <>
      <div className="flex bg-white">
        <Sidebar />
        <div className="flex flex-col w-full">
          <TopBar />
          <div className="p-4 bg-[#f9f9ff]">
            <Routes>
              {/* Remove index attribute and set the path to "dashboard" */}
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="clients" element={<Appointments />} />
              <Route path="payments" element={<Payments />} />
              <Route path="ratings" element={<Ratings />} />
              <Route path="help" element={<Help />} />
              <Route path="profile" element={<Profile />} />
              <Route path="articles" element={<Articles />} />
              <Route path="calender" element={<Calender />} />
              <Route path="parameters" element={<Parameters />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayouts />}>
        <Route element={<Home />} path="/" />
        <Route element={<Avocats />} path="/avocats" />
        <Route element={<DetailsAvocats />} path="/avocats/:id" />
      </Route>

      <Route element={<EmptyLayout />}>
        <Route element={<LogIn />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
      </Route>

      <Route element={<LawyerRoutes />} path="/lawyer/*" />
    </Routes>
  );
};

export default AppRoutes;
