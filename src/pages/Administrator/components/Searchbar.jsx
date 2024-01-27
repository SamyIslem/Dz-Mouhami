import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
function Searchbar({title}) {
  return (
    <div className='flex justify-between items-center p-4  bg-white rounded-t-xl '>
        <h1 className='font-bold text-xl '>
            {title}
        </h1>
        <div>
            <div className='border border-gray-300 rounded-full px-4 py-2 bg-[#fcfbfb]'>
                <SearchOutlinedIcon/>
            <input type="text" placeholder='Rechercher' className='focus:outline-none bg-transparent'/>
            </div>
            
        </div>
    </div>
  )
}

export default Searchbar