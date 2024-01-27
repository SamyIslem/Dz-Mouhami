// LawyerDashboard.js
import React from 'react';
import EarningChart from '../components/EarningChart';
const LawyerDashboard = () => {
  // Dummy data for demonstration purposes
  const totalUsers = 150;
  const TotalCostumers = 25;
  const TotalLawyers = 100;
  const TotalCases = 100;
  const CompletedCases = 10;


  const totalEarnings = '$50,000';
  const clientSatisfaction = '90%';

  return (
    <>
    <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

    <div className="container flex flex-col  justify-between  p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Total Clients */}
        <div className="bg-white p-3 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Users</h2>
          <p className="text-3xl font-bold text-blue-500">{totalUsers}</p>
        </div>

        {/* Cases in Progress */}
        <div className="bg-white p-3 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Costumers</h2>
          <p className="text-3xl font-bold text-yellow-500">{TotalCostumers}</p>
        </div>

        {/* Cases Completed */}
        <div className="bg-white p-3 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Lawyers</h2>
          <p className="text-3xl font-bold text-green-500">{TotalLawyers}</p>
        </div>


        <div className="bg-white p-3 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Total Cases</h2>
          <p className="text-3xl font-bold text-blue-700">{TotalCases}</p>
        </div>

        <div className="bg-white p-3 rounded shadow-md ">
          <h2 className="text-lg font-semibold mb-2">Completed Cases</h2>
          <p className="text-3xl  font-bold text-purple-500">{CompletedCases}</p>
        </div>
        
        
      </div>
      
      <div className='m-4'>
        <h1 className='text-xl font-bold mb-4'>Earnings</h1>
        <EarningChart/>
      </div>
    </div>
    </>
  );
};

export default LawyerDashboard;
