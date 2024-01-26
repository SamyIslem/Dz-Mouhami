// LawyerDashboard.js
import React from 'react';
import EarningChart from '../components/EarningChart';
const LawyerDashboard = () => {
  // Dummy data for demonstration purposes
  const totalClients = 150;
  const casesInProgress = 25;
  const casesCompleted = 100;
  const casesCanceled = 100;
  const upcomingAppointments = 10;


  const totalEarnings = '$50,000';
  const clientSatisfaction = '90%';

  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Lawyer Dashboard</h1>

    <div className="container flex flex-col  justify-between  p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Total Clients */}
        <div className="bg-white p-3 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Clients</h2>
          <p className="text-3xl font-bold text-blue-500">{totalClients}</p>
        </div>

        {/* Cases in Progress */}
        <div className="bg-white p-3 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Cases in Progress</h2>
          <p className="text-3xl font-bold text-yellow-500">{casesInProgress}</p>
        </div>

        {/* Cases Completed */}
        <div className="bg-white p-3 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Cases Completed</h2>
          <p className="text-3xl font-bold text-green-500">{casesCompleted}</p>
        </div>


        <div className="bg-white p-3 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Cases Canceled</h2>
          <p className="text-3xl font-bold text-red-500">{casesCanceled}</p>
        </div>

        {/* Upcoming Appointments */}
        <div className="bg-white p-3 rounded shadow-md ">
          <h2 className="text-lg font-semibold mb-2">Upcoming Appointments</h2>
          <p className="text-3xl  font-bold text-purple-500">{upcomingAppointments}</p>
        </div>
        
        
      </div>
      
      <div className='mt-4'>
        <EarningChart/>
      </div>
    </div>
    </>
  );
};

export default LawyerDashboard;
