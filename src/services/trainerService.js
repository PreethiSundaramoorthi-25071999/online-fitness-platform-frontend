import api from './api';

const trainerService = {
  getTrainerById: async (trainerId) => {
    const { data } = await api.get(`http://localhost:5000/api/trainers/${trainerId}`);
    return data;
  },

  getAllTrainers: async () => {
    const { data } = await api.get('http://localhost:5000/api/trainers');
    return data;
  },

  addReview: async (trainerId, reviewData) => {
    const { data } = await api.post(`http://localhost:5000/api/trainers/${trainerId}/reviews`, reviewData);
    return data;
  }
};

export default trainerService;
