import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const api = {
  getSeminars: () => axios.get(`${API_URL}/seminars`),
  deleteSeminar: (id) => axios.delete(`${API_URL}/seminars/${id}`),
  updateSeminar: (id, data) => axios.put(`${API_URL}/seminars/${id}`, data),
};