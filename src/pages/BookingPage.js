


// 2
import React from "react";

const bookings = [
  { "id": "201", "userId": "1", "classId": "101", "date": "2024-11-05T09:00:00Z", "status": "confirmed", "confirmationNotificationSent": true },
  { "id": "202", "userId": "2", "classId": "102", "date": "2024-11-07T18:00:00Z", "status": "pending", "confirmationNotificationSent": false },
  { "id": "203", "userId": "3", "classId": "103", "date": "2024-11-05T17:00:00Z", "status": "confirmed", "confirmationNotificationSent": true },
  { "id": "204", "userId": "4", "classId": "104", "date": "2024-11-06T10:00:00Z", "status": "confirmed", "confirmationNotificationSent": true },
  { "id": "205", "userId": "5", "classId": "105", "date": "2024-11-07T19:00:00Z", "status": "pending", "confirmationNotificationSent": false },
  { "id": "206", "userId": "6", "classId": "106", "date": "2024-11-08T18:00:00Z", "status": "confirmed", "confirmationNotificationSent": true },
  { "id": "207", "userId": "7", "classId": "107", "date": "2024-11-09T17:00:00Z", "status": "confirmed", "confirmationNotificationSent": true },
  { "id": "208", "userId": "8", "classId": "108", "date": "2024-11-10T16:00:00Z", "status": "pending", "confirmationNotificationSent": false },
  { "id": "209", "userId": "9", "classId": "109", "date": "2024-11-11T15:00:00Z", "status": "confirmed", "confirmationNotificationSent": true },
  { "id": "210", "userId": "10", "classId": "110", "date": "2024-11-12T08:00:00Z", "status": "pending", "confirmationNotificationSent": false }
];

function BookingList() {
  const handleReschedule = (bookingId) => {
    console.log("Reschedule booking:", bookingId);
    // Add reschedule logic here
  };

  const handleDelete = (bookingId) => {
    console.log("Delete booking:", bookingId);
    // Add delete logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Bookings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-xl font-semibold mb-2">Booking ID: {booking.id}</p>
            <p className="text-gray-700 mb-2">User ID: {booking.userId}</p>
            <p className="text-gray-700 mb-2">Class ID: {booking.classId}</p>
            <p className="text-gray-700 mb-2">Date: {new Date(booking.date).toLocaleString()}</p>
            <p className={`mb-2 ${booking.status === "confirmed" ? "text-green-600" : "text-yellow-600"}`}>
              Status: {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </p>
            <p className="text-gray-700 mb-4">Notification Sent: {booking.confirmationNotificationSent ? "Yes" : "No"}</p>

            <div className="flex space-x-4">
              <button
                onClick={() => handleReschedule(booking.id)}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Reschedule
              </button>
              <button
                onClick={() => handleDelete(booking.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
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

export default BookingList;
