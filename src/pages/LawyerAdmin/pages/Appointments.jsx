import React from 'react'
import DataTable from '../Components/DataTable.jsx'
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
  { field: 'clientName', headerName: 'Client Name', width: 130 },
  { field: 'clientIssue', headerName: 'Probleme', width: 130 },
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
    field: 'issueStatus',
    headerName: 'Status',
    width: 120,
    renderCell: (params) => (
      <span
        className={`inline-block px-2 py-1 text-sm font-semibold rounded ${
          params.value === 'completed' ? 'bg-green-500 text-white' :
          params.value === 'refused' ? 'bg-red-500 text-white' :
          params.value === 'in progress' ? 'bg-yellow-500 text-white' :
          ''
        }`}
      >
        {params.value}
      </span>
    ),
  },
];

const rows = [
  { id: 1,ProfilePicture:manpic, clientName: 'Snow', clientIssue: 'Divorce', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', issueStatus:'completed'},
  { id: 2,ProfilePicture:manpic, clientName: 'Lannister', clientIssue: 'Divorce', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', issueStatus:'refused'},
  { id: 3,ProfilePicture:manpic, clientName: 'Lannister', clientIssue: 'Tue', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', issueStatus:'in progress'},
  { id: 4,ProfilePicture:manpic, clientName: 'Stark', clientIssue: '3limghara', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', issueStatus:'completed'},
  { id: 5,ProfilePicture:manpic, clientName: 'Targaryen', clientIssue: 'stegh', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', issueStatus:'completed'},
  { id: 6,ProfilePicture:manpic, clientName: 'Melisandre', clientIssue: null, phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', issueStatus: 'completed'},
  { id: 7,ProfilePicture:manpic, clientName: 'Clifford', clientIssue: 'Ferrara', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', issueStatus:'completed'},
  { id: 8,ProfilePicture:manpic, clientName: 'Frances', clientIssue: 'Rossini', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', issueStatus:'completed'},
  { id: 9,ProfilePicture:manpic, clientName: 'Roxie', clientIssue: 'Harvey', phoneNumber:  5550118 , email :'jane@microsoft.com' ,wilaya: 'Bejaia', issueStatus:'completed'},
];
function Appointments() {
  return (
  <div className='px-8 py-10 bg-[#f9f9ff] flex flex-col'>
    <StatsCard/>
    <Searchbar/>
    <DataTable  rows={rows} columns={columns}/>
  </div>
  )
}

export default Appointments