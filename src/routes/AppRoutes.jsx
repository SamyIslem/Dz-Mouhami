import React from "react";
import { Route, Routes } from "react-router-dom";
import { Avocats, DetailsAvocats, Home, LogIn, SignUp, Contact } from "@/pages";
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


import AdminSidebar from "@/pages/Administrator/Components/Sidebar";
import AdminTopBar from "@/pages/Administrator/Components/TopBar";
import AdminDashboard from "@/pages/Administrator/Pages/Dashboard";
import AdminAvocats from "@/pages/Administrator/Pages/Avocats";
import AdminHelp from "@/pages/Administrator/Pages/Help";
import AdminProfile from "@/pages/Administrator/Pages/Profile";
import AdminParameters from "@/pages/Administrator/Pages/Parameters";
import AdminClients from "@/pages/Administrator/Pages/Clients";
import SignUpDetails from "../pages/SignUpDetails/SignUpDetails";

const LawyerRoutes = () => {
  return (
    <>
      <div className="flex bg-white h-screen">
        <Sidebar />
        <div className="flex flex-col w-full">
          <TopBar />
          <div className="p-4 bg-[#f9f9ff]">
            <Routes>
              
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

const AdminRoutes = () => {
  return (
    <>
      <div className="flex bg-white h-screen">
        <AdminSidebar />
        <div className="flex flex-col w-full">
          <AdminTopBar />
          <div className="p-4 bg-[#f9f9ff]">
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="avocats" element={<AdminAvocats />} />
              <Route path="clients" element={<AdminClients />} />
              <Route path="help" element={<AdminHelp />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="parameters" element={<AdminParameters />} />
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
        <Route element={<Contact />} path="/contact" />
      </Route>

      <Route element={<EmptyLayout />}>
        <Route element={<LogIn />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<SignUpDetails />} path="/signupDetails" />
      </Route>

      <Route element={<LawyerRoutes />} path="/lawyer/*" />
      <Route element={<AdminRoutes />} path="/admin/*" />
    </Routes>
  );
};

export default AppRoutes;
