import api from './api';

const classService = {
  getAllClasses: async () => {
    const { data } = await api.get('/classes');
    return data;
  },

  getClassById: async (classId) => {
    const { data } = await api.get(`/classes/${classId}`);
    return data;
  },

  getClassesByTrainer: async (trainerId) => {
    const { data } = await api.get(`/trainers/${trainerId}/classes`);
    return data;
  }
};

export default classService;
