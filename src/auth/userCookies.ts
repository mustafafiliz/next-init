import axios from 'axios';

export const setTokenCookie = async (phone: string, loginCode: string, type: 'login' | 'register') => {
  return axios.post('/api/login', { phone, loginCode, type });
};

export const removeTokenCookie = () => {
  return axios.post('/api/logout', {});
};
