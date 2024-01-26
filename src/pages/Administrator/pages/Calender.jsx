// UserCalendar.js
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const UserCalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Meeting with Client 1',
      start: new Date(2024, 0, 10, 10, 0), // January 10, 2024, 10:00 AM
      end: new Date(2024, 0, 10, 12, 0), // January 10, 2024, 12:00 PM
    },
    // Add more events as needed
  ]);

  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default UserCalendar;
