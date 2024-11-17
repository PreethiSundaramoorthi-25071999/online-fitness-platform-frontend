


///////////////3
import React from "react";

const classes = [
  { "id": "101", "trainerId": "3", "type": "Yoga", "duration": "60 min", "schedule": ["2024-11-05T09:00:00Z", "2024-11-06T09:00:00Z"], "capacity": 10, "availableSpots": 5 },
  { "id": "102", "trainerId": "4", "type": "Strength Training", "duration": "45 min", "schedule": ["2024-11-07T18:00:00Z"], "capacity": 12, "availableSpots": 2 },
  { "id": "103", "trainerId": "5", "type": "Cardio", "duration": "30 min", "schedule": ["2024-11-05T17:00:00Z", "2024-11-08T17:00:00Z"], "capacity": 15, "availableSpots": 0 },
  { "id": "104", "trainerId": "3", "type": "Pilates", "duration": "60 min", "schedule": ["2024-11-06T10:00:00Z"], "capacity": 8, "availableSpots": 4 },
  { "id": "105", "trainerId": "4", "type": "HIIT", "duration": "30 min", "schedule": ["2024-11-07T19:00:00Z"], "capacity": 20, "availableSpots": 15 },
  { "id": "106", "trainerId": "5", "type": "Zumba", "duration": "45 min", "schedule": ["2024-11-08T18:00:00Z"], "capacity": 15, "availableSpots": 5 },
  { "id": "107", "trainerId": "3", "type": "Kickboxing", "duration": "60 min", "schedule": ["2024-11-09T17:00:00Z"], "capacity": 10, "availableSpots": 3 },
  { "id": "108", "trainerId": "4", "type": "Body Pump", "duration": "45 min", "schedule": ["2024-11-10T16:00:00Z"], "capacity": 12, "availableSpots": 6 },
  { "id": "109", "trainerId": "5", "type": "Aqua Aerobics", "duration": "50 min", "schedule": ["2024-11-11T15:00:00Z"], "capacity": 10, "availableSpots": 0 },
  { "id": "110", "trainerId": "3", "type": "Meditation", "duration": "30 min", "schedule": ["2024-11-12T08:00:00Z"], "capacity": 20, "availableSpots": 20 }
];

function ClassList() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Class Schedule</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{classItem.type}</h2>
            <p className="text-gray-600">Trainer ID: {classItem.trainerId}</p>
            <p className="text-gray-600">Duration: {classItem.duration}</p>
            <p className="text-gray-600">Capacity: {classItem.capacity}</p>
            <p className="text-gray-600">Available Spots: {classItem.availableSpots}</p>
            <ul className="list-disc pl-5 mt-2">
              {classItem.schedule.map((date, index) => (
                <li key={index} className="text-gray-500">
                  {new Date(date).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassList;



// 
// const classes = [
//   { "id": "101", "trainerId": "3", "type": "Yoga", "duration": "60 min", "schedule": ["2024-11-05T09:00:00Z", "2024-11-06T09:00:00Z"], "capacity": 10, "availableSpots": 5 },
//   { "id": "102", "trainerId": "4", "type": "Strength Training", "duration": "45 min", "schedule": ["2024-11-07T18:00:00Z"], "capacity": 12, "availableSpots": 2 },
//   { "id": "103", "trainerId": "5", "type": "Cardio", "duration": "30 min", "schedule": ["2024-11-05T17:00:00Z", "2024-11-08T17:00:00Z"], "capacity": 15, "availableSpots": 0 },
//   { "id": "104", "trainerId": "3", "type": "Pilates", "duration": "60 min", "schedule": ["2024-11-06T10:00:00Z"], "capacity": 8, "availableSpots": 4 },
//   { "id": "105", "trainerId": "4", "type": "HIIT", "duration": "30 min", "schedule": ["2024-11-07T19:00:00Z"], "capacity": 20, "availableSpots": 15 },
//   { "id": "106", "trainerId": "5", "type": "Zumba", "duration": "45 min", "schedule": ["2024-11-08T18:00:00Z"], "capacity": 15, "availableSpots": 5 },
//   { "id": "107", "trainerId": "3", "type": "Kickboxing", "duration": "60 min", "schedule": ["2024-11-09T17:00:00Z"], "capacity": 10, "availableSpots": 3 },
//   { "id": "108", "trainerId": "4", "type": "Body Pump", "duration": "45 min", "schedule": ["2024-11-10T16:00:00Z"], "capacity": 12, "availableSpots": 6 },
//   { "id": "109", "trainerId": "5", "type": "Aqua Aerobics", "duration": "50 min", "schedule": ["2024-11-11T15:00:00Z"], "capacity": 10, "availableSpots": 0 },
//   { "id": "110", "trainerId": "3", "type": "Meditation", "duration": "30 min", "schedule": ["2024-11-12T08:00:00Z"], "capacity": 20, "availableSpots": 20 }
// ];