
//5
import React from 'react';
import { CiTimer } from 'react-icons/ci'; // Import the CiTimer icon
import { FaRegCalendarAlt } from "react-icons/fa"; // Import the calendar icon

// Booking data
export const bookings = [
  { "id": "107", "trainerId": "3", "type": "Kickboxing", "duration": "60 min", "schedule": ["2024-11-09T17:00:00Z"], "capacity": 10, "availableSpots": 3 },
  { "id": "108", "trainerId": "4", "type": "Body Pump", "duration": "45 min", "schedule": ["2024-11-10T16:00:00Z"], "capacity": 12, "availableSpots": 6 },
  { "id": "109", "trainerId": "5", "type": "Aqua Aerobics", "duration": "50 min", "schedule": ["2024-11-11T15:00:00Z"], "capacity": 10, "availableSpots": 0 },
  { "id": "110", "trainerId": "3", "type": "Meditation", "duration": "30 min", "schedule": ["2024-11-12T08:00:00Z"], "capacity": 20, "availableSpots": 20 }
];

function BookingPage() {
  // Function to handle button clicks
  const handleFeatureMessage = () => {
    alert("Feature development is in process");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">My Bookings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> 
        {bookings.map((classItem) => (
          <div key={classItem.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <h2 className="text-xl font-semibold mb-2">{classItem.type}</h2>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <CiTimer className="mr-2" /> Duration: {classItem.duration}
            </p>
            
            <div className="text-gray-600 mb-2">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaRegCalendarAlt className="mr-2" /> Timing:
              </h3>
              <div>
                {classItem.schedule.map((date, index) => (
                  <p key={index} className="text-gray-800">
                    {new Date(date).toLocaleDateString()} {new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-4">
              <button
                className="bg-green-500 text-white py-2 px-4 rounded font-semibold hover:bg-green-600"
                onClick={handleFeatureMessage}
              >
                Reschedule
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded font-semibold hover:bg-red-600"
                onClick={handleFeatureMessage}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookingPage;
