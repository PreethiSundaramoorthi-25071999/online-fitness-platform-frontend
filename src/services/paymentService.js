import api from './api';

const paymentService = {
  createPaymentIntent: async (bookingId) => {
    const { data } = await api.post('/payment', { bookingId });
    return data.clientSecret;
  }
};

export default paymentService;
