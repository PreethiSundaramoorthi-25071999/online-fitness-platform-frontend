import api from './api';

const bookingService = {
  createBooking: async (classId, userId) => {
    const { data } = await api.post(`/bookings/${classId}`, { userId });
    return data;
  },

  getBookingsByUser: async (userId) => {
    const { data } = await api.get(`/bookings/user/${userId}`);
    return data;
  },

  cancelBooking: async (bookingId) => {
    const { data } = await api.delete(`/bookings/${bookingId}`);
    return data;
  },

  getBookingById: async (bookingId) => {
    const { data } = await api.get(`/bookings/${bookingId}`);
    return data;
  }
};

export default bookingService;
