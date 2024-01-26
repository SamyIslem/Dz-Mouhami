import React from 'react'
import Sidebar from '@/pages/LawyerAdmin/Components/Sidebar';
import TopBar from '@/pages/LawyerAdmin/Components/TopBar';
import Dashboard from '@/pages/LawyerAdmin/Pages/Dashboard';
import Ratings from '@/pages/LawyerAdmin/Pages/Ratings';
import Appointments from '@/pages/LawyerAdmin/Pages/Appointments';
import Payments from '@/pages/LawyerAdmin/Pages/Payments';
import Help from '@/pages/LawyerAdmin/Pages/Help';
import Profile from '@/pages/LawyerAdmin/Pages/Profile';
import Articles from '@/pages/LawyerAdmin/Pages/Articles';
import Calender from '@/pages/LawyerAdmin/Pages/Calender';
import Parameters from '@/pages/LawyerAdmin/Pages/Parameters';
import { Route , Routes } from 'react-router-dom';
function AvocatRouter() {
  return (
    <div className="flex  bg-white">
    <Sidebar />
    <div className="flex flex-col w-full">
      <TopBar />
      <div className="p-4 bg-[#f9f9ff]">
        <Routes>
          <Route exact={true} path="/dashboard" element={<Dashboard />} />
          <Route exact={true} path="/clients" element={<Appointments />} />
          <Route exact={true} path="/payments" element={<Payments />} />
          <Route exact={true} path="/ratings" element={<Ratings />} />
          <Route exact={true} path="/help" element={<Help />} />
          <Route exact={true} path="/profile" element={<Profile />} />
          <Route exact={true} path="/articles" element={<Articles/>} />
          <Route exact={true} path="/calender" element={<Calender/>} />
          <Route exact={true} path="/parameters" element={<Parameters/>} />
        </Routes>
      </div>
    </div>
  </div>
  )
}

export default AvocatRouter