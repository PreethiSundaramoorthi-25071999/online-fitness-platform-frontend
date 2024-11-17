
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SchedulePage = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/schedule/classes'); // Adjust the URL if needed
        setSchedules(response.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">This is Class Schedule Page</h1>
      {schedules.length > 0 ? (
        <div className="space-y-4">
          {schedules.map((schedule) => (
            <div key={schedule._id} className="p-4 border rounded-md shadow-sm">
              <h2 className="text-xl font-semibold">{schedule.classType}</h2>
              <p>Trainer: {schedule.trainer.name}</p>
              <p>Date: {new Date(schedule.date).toLocaleDateString()}</p>
              <p>Time: {schedule.startTime} - {schedule.endTime}</p>
              <p>Max Participants: {schedule.maxParticipants}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No classes available at the moment.</p>
      )}
    </div>
  );
};

export default SchedulePage;

