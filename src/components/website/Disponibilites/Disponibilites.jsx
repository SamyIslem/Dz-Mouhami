import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
function Disponibilites() {
    const days = ['Horaires', 'sam', 'dim', 'lun', 'mar', 'mer', 'jeu'];
const times = ['08h - 10h', '10h - 12h', '13h - 15h', '15h - 17h'];
 
    const availability = {};
    days.forEach(day => {
      times.forEach(time => {
        // Assign availability randomly
        availability[`${day}-${time}`] = Math.random() < 0.5;
      });
    });
  return (
    <table>
    <thead>
      <tr>
        {days.map((day, index) => (
          <th className='text-white font-bold py-2' key={index}>{day}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {times.map((time, index) => (
        <tr key={index} className=''>
          <td className='text-center text-white  bg-[#4A6177] py-2 mx-2'>{time}</td>
          {days.slice(1).map((day, index) => (
            <td className={index % 2 === 0 ? 'bg-[#607D8B] text-center' : 'bg-[#4A6177] text-center'} key={index}>
              {availability[`${day}-${time}`] ? <CheckIcon /> : ''}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Disponibilites



 
