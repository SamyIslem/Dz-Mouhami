import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import manpic from '../../../assets/lawyer/manpic.jpg'




export default function DataTable({columns, rows }) {
  const [selectedRow, setSelectedRow] = useState(null);

const handleRowClick = (params) => {
  setSelectedRow(params.row);
};

const handleCloseModal = () => {
  setSelectedRow(null);
};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setSelectedRow((prevRow) => ({
    ...prevRow,
    [name]: value,
  }));
};

const handleSubmit = (event) => {
  event.preventDefault();
  // Here you can handle the form submission, e.g., update the data on the server
};
  return (
   <div className='relative'>
    <div style={{ height: '100%', width: '100%' ,background:'white'}} className='' >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowClick={handleRowClick}
      />

    </div>
    {selectedRow && (
        <div className="absolute w-3/4  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-lg shadow-lg p-6 border">
            <form onSubmit={handleSubmit}>
              <h1 className="text-xl font-bold mb-4">Edit Client</h1>
              <div className="mb-4">
                <label className="block mb-2">Client Name</label>
                <input type="text" name="clientName" value={selectedRow.clientName} onChange={handleInputChange} className="border border-gray-300 rounded px-2 py-1 w-full" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Client Issue</label>
                <input type="text" name="clientIssue" value={selectedRow.clientIssue} onChange={handleInputChange} className="border border-gray-300 rounded px-2 py-1 w-full" />
              </div>
              <div className="flex items-center mb-4">
                <label className="mr-2">Status:</label>
                <select
                  name="issueStatus"
                  value={selectedRow.issueStatus}
                  onChange={handleInputChange}
                  className="border border-gray-300 rounded px-2 py-1"
                >
                  <option value="accepted">Accepted</option>
                  <option value="refused">Refused</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2">Phone Number</label>
                <input type="text" name="phoneNumber" value={selectedRow.phoneNumber} onChange={handleInputChange} className="border border-gray-300 rounded px-2 py-1 w-full" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input type="text" name="email" value={selectedRow.email} onChange={handleInputChange} className="border border-gray-300 rounded px-2 py-1 w-full" />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Wilaya</label>
                <input type="text" name="wilaya" value={selectedRow.wilaya} onChange={handleInputChange} className="border border-gray-300 rounded px-2 py-1 w-full" />
              </div>
              
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                Save
              </button>
              <button type="button" onClick={handleCloseModal} className="bg-gray-500 text-white px-4 py-2 rounded">
                Close
              </button>
            </form>
          </div>
        </div>
      )}
 
    </div>
  );
}
