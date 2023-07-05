import { HTTP } from '../utils/instance';


export const register = (phone: string) => {
  return HTTP.post('/user/register', {
    phone,
  });
};

