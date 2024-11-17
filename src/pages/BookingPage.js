import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BookingPage = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const [fitnessClass, setFitnessClass] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchClassDetails = async () => {
      try {
        const { data } = await axios.get(`/api/classes/${classId}`);
        setFitnessClass(data);
      } catch (error) {
        setError('Error fetching class details');
      }
    };

    fetchClassDetails();
  }, [classId]);

  const handleBooking = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        setError('Please log in to book a class.');
        return;
      }

      await axios.post(`/api/bookings/${classId}`, { userId });
      navigate('/bookings');
    } catch (error) {
      setError('Error booking the class');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      {fitnessClass ? (
        <>
          <h1 className="text-3xl font-bold">{fitnessClass.title}</h1>
          <p>{fitnessClass.description}</p>
          <p>Duration: {fitnessClass.duration} mins</p>
          <p>Date: {new Date(fitnessClass.date).toLocaleDateString()}</p>
          <button
            className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </>
      ) : (
        <p>{error || 'Loading class details...'}</p>
      )}
    </div>
  );
};

export default BookingPage;
