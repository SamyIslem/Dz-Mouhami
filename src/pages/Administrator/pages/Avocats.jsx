import React from 'react'
import DataTable from '../components/DataTable.jsx'
import StatsCard from '../components/StatsCard.jsx'
import Searchbar from '../components/Searchbar.jsx'
import manpic from '../../../assets/lawyer/manpic.jpg'
const columns = [
  { field: 'id', headerName: 'ID', width: 35 },
  {
    field: 'ProfilePicture',
    headerName: ' Picture',
    width:80,
    sortable: false,
    renderCell: (params) => (
    <div className='flex items-center justify-center '>
<img src={params.value} alt={params.value} className=' h-12 w-12 rounded-full'/>
    </div>

      
    ),
  },
  { field: 'LawyerName', headerName: 'Lawyer Name', width: 130 },
  { field: 'LawyerSpeciality', headerName: 'Speciality', width: 130 },
  {
    field: 'phoneNumber',
    headerName: 'Phone Number',
    width: 130,
    type:'number'
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 160,
  },
  {
    field: 'wilaya',
    headerName: 'Wilaya',
    width: 90,
  },
  {
    field: 'AccountStatus',
    headerName: 'Acount Status',
    width: 120,
    renderCell: (params) => (
      <span
        className={`inline-block px-2 py-1 text-sm font-semibold rounded ${
          params.value === 'accepted' ? 'bg-green-500 text-white' :
          params.value === 'refused' ? 'bg-red-500 text-white' :
          params.value === 'pending' ? 'bg-yellow-500 text-white' :
          params.value === 'suspended' ? 'bg-gray-500 text-white' :
          ''
        }`}
      >
        {params.value}
      </span>
    ),
  },
];

const rows = [
  { id: 1,ProfilePicture:manpic, LawyerName: 'Snow', LawyerSpeciality: 'Divorce', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', AccountStatus:'accepted'},
  { id: 2,ProfilePicture:manpic, LawyerName: 'Lannister', LawyerSpeciality: 'Divorce', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', AccountStatus:'refused'},
  { id: 3,ProfilePicture:manpic, LawyerName: 'Lannister', LawyerSpeciality: 'Tue', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', AccountStatus:'pending'},
  { id: 4,ProfilePicture:manpic, LawyerName: 'Stark', LawyerSpeciality: '3limghara', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', AccountStatus:'accepted'},
  { id: 5,ProfilePicture:manpic, LawyerName: 'Targaryen', LawyerSpeciality: 'stegh', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', AccountStatus:'suspended'},
  { id: 6,ProfilePicture:manpic, LawyerName: 'Melisandre', LawyerSpeciality: null, phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', AccountStatus: 'accepted'},
  { id: 7,ProfilePicture:manpic, LawyerName: 'Clifford', LawyerSpeciality: 'Ferrara', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', AccountStatus:'accepted'},
  { id: 8,ProfilePicture:manpic, LawyerName: 'Frances', LawyerSpeciality: 'Rossini', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', AccountStatus:'accepted'},
  { id: 9,ProfilePicture:manpic, LawyerName: 'Roxie', LawyerSpeciality: 'Harvey', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', AccountStatus:'accepted'},
];
function Avocats() {
  return (
  <div className='px-8 py-10 bg-[#f9f9ff] flex flex-col'>
    <StatsCard/>
    <Searchbar title='liste des avocats'/>
    <DataTable columns={columns} rows={rows} type='avocats'/>
  </div>
  )
}

export default Avocats