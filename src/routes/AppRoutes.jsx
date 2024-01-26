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


import AdminSidebar from "@/pages/Administrator/Components/Sidebar";
import AdminTopBar from "@/pages/Administrator/Components/TopBar";
import AdminDashboard from "@/pages/Administrator/Pages/Dashboard";
import AdminRatings from "@/pages/Administrator/Pages/Ratings";
import AdminAppointments from "@/pages/Administrator/Pages/Appointments";
import AdminPayments from "@/pages/Administrator/Pages/Payments";
import AdminHelp from "@/pages/Administrator/Pages/Help";
import AdminProfile from "@/pages/Administrator/Pages/Profile";
import AdminArticles from "@/pages/Administrator/Pages/Articles";
import AdminCalender from "@/pages/Administrator/Pages/Calender";
import AdminParameters from "@/pages/Administrator/Pages/Parameters";

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

const AdminRoutes = () => {
  return (
    <>
      <div className="flex bg-white">
        <AdminSidebar />
        <div className="flex flex-col w-full">
          <AdminTopBar />
          <div className="p-4 bg-[#f9f9ff]">
            <Routes>
              {/* Remove index attribute and set the path to "dashboard" */}
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="clients" element={<AdminAppointments />} />
              <Route path="payments" element={<AdminPayments />} />
              <Route path="ratings" element={<AdminRatings />} />
              <Route path="help" element={<AdminHelp />} />
              <Route path="profile" element={<AdminProfile />} />
              <Route path="articles" element={<AdminArticles />} />
              <Route path="calender" element={<AdminCalender />} />
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
      </Route>

      <Route element={<EmptyLayout />}>
        <Route element={<LogIn />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
      </Route>

      <Route element={<LawyerRoutes />} path="/lawyer/*" />
      <Route element={<AdminRoutes />} path="/admin/*" />
    </Routes>
  );
};

export default AppRoutes;
