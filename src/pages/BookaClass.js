
//6
import React from 'react';
import { CiTimer } from 'react-icons/ci';
import { MdOutlineReduceCapacity } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";

// Booking data
export const bookings = [
  { "id": "101", "trainerId": "3", "type": "Yoga", "duration": "60 min", "schedule": ["2024-11-11T09:00:00Z"], "capacity": 10, "availableSpots": 5 },
  { "id": "102", "trainerId": "4", "type": "Strength Training", "duration": "45 min", "schedule": ["2024-11-06T18:00:00Z"], "capacity": 12, "availableSpots": 2 },
  { "id": "103", "trainerId": "5", "type": "Cardio", "duration": "30 min", "schedule": ["2024-11-05T17:00:00Z"], "capacity": 15, "availableSpots": 0 },
  { "id": "104", "trainerId": "3", "type": "Pilates", "duration": "60 min", "schedule": ["2024-11-06T10:00:00Z"], "capacity": 8, "availableSpots": 4 },
  { "id": "105", "trainerId": "4", "type": "HIIT", "duration": "30 min", "schedule": ["2024-11-07T19:00:00Z"], "capacity": 20, "availableSpots": 15 },
  { "id": "106", "trainerId": "5", "type": "Zumba", "duration": "45 min", "schedule": ["2024-11-08T18:00:00Z"], "capacity": 15, "availableSpots": 5 },
  { "id": "107", "trainerId": "3", "type": "Kickboxing", "duration": "60 min", "schedule": ["2024-11-09T17:00:00Z"], "capacity": 10, "availableSpots": 3 },
  { "id": "108", "trainerId": "4", "type": "Body Pump", "duration": "45 min", "schedule": ["2024-11-10T16:00:00Z"], "capacity": 12, "availableSpots": 6 },
  { "id": "109", "trainerId": "5", "type": "Aqua Aerobics", "duration": "50 min", "schedule": ["2024-11-11T15:00:00Z"], "capacity": 10, "availableSpots": 0 },
  { "id": "110", "trainerId": "3", "type": "Meditation", "duration": "30 min", "schedule": ["2024-11-12T08:00:00Z"], "capacity": 20, "availableSpots": 20 }
];

// Image map for different class types
const imageMap = {
  "Yoga": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMSPrMsaoJ32huxHudDaZQ9hVmGFy6TO9wDg&s",
  "Strength Training": "https://www.mensjournal.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk2MTM3Mjk2NTQ5NTIwNTI5/_main_liftlift.jpg",
  "Cardio": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg",
  "Pilates": "https://www.verywellhealth.com/thmb/XwXC4jfVxm8eWikThkDOXz3r9o0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1468575157-7686b4645ff14c0586a07c478e2f7fee.jpg",
  "HIIT": "https://res.cloudinary.com/hydrow/image/upload/f_auto/w_1000/q_100/v1715087676/Blog/what-are-the-benefits-of-hiit-training.jpg",
  "Zumba": "https://www.verywellfit.com/thmb/SaUyT2h2ujEDx4zCAU0ilFclWqI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4688722-GettyImages-950806258-06e1e050ab184f3694fd96017c9a42ee.jpg",
  "Kickboxing": "https://strikingclinicbanbury.com/cdn/shop/articles/kickboxing_in_ufc.jpg?v=1705926939&width=1100",
  "Body Pump": "https://fitnessproject.us/wp-content/uploads/2020/07/9H7A1626.jpg-Body-Pump.jpg",
  "Aqua Aerobics": "https://static.toiimg.com/thumb/imgsize-229771,msid-68800180,width-400,resizemode-4/68800180.jpg",
  "Meditation": "https://www.verywellhealth.com/thmb/ws80F7h63fhNoGCiz-HVd8rt98g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/meditating-woman-56a792a05f9b58b7d0ebce12.jpg"
};

function BookaClass() {
  const handleDateClick = () => {
    alert("Feature development is in process");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Book Class</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((classItem) => (
          <div key={classItem.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col">
            <img 
              src={imageMap[classItem.type]} 
              alt={classItem.type} 
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{classItem.type}</h2>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <CiTimer className="mr-2" /> Duration: {classItem.duration}
            </p>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <MdOutlineReduceCapacity className="mr-2" /> Capacity: {classItem.capacity}
            </p>
            <p className="font-semibold text-gray-600 mb-1 flex items-center">
              <BsFillPeopleFill className="mr-2" /> Available Spots: {classItem.availableSpots}
            </p>
            <div className="text-gray-600 mb-2">
              <h3 className="font-semibold mb-2 flex items-center">
                <FaRegCalendarAlt className="mr-2" /> Schedule:
              </h3>
              <div className="flex flex-wrap gap-4">
                {classItem.schedule.map((date, index) => (
                  <div
                    key={index}
                    className="bg-white text-green-600 p-2 rounded-lg mb-4 text-center cursor-pointer transition-all hover:bg-white hover:scale-105 transform border-2 border-grey-950"
                    onClick={handleDateClick}
                  >
                    <p className="font-semibold">
                      <span className="block">{new Date(date).toLocaleDateString()}</span>
                      <span className="font-semibold">{new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookaClass;