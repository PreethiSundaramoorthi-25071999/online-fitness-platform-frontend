import api from './api';

const authService = {
  register: async (userData) => {
    const { data } = await api.post('/auth/register', userData);
    return data;
  },
  
  login: async (credentials) => {
    const { data } = await api.post('/auth/login', credentials);
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user._id);
    }
    return data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  },

  getCurrentUser: () => {
    return localStorage.getItem('token');
  }
};

export default authService;
