import React from 'react'
import DataTable from '../Components/DataTable.jsx'
import StatsCard from '../components/StatsCard.jsx'
import Searchbar from '../components/Searchbar.jsx'
function Appointments() {
  return (
  <div className='px-8 py-10 bg-[#f9f9ff] flex flex-col'>
    <StatsCard/>
    <Searchbar/>
    <DataTable/>
  </div>
  )
}

export default Appointments