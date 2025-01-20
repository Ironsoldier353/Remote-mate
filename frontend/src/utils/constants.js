import axios from 'axios';

export const API_URL = 'http://localhost:5000';

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/api/auth/login`, { email, password });
    return response.data;
};
export const register = async (name, email, password) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, {
    name,
    email,
    password,
  });
  return response.data;
};