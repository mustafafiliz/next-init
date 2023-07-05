import axios, { AxiosError, AxiosInstance } from 'axios';

let token: string;

export const setServerSession = (data: any) => {
  token = data;
};

const useRequest = async (config: any) => {
  if (token) config.headers.Authorization = 'Bearer ' + token;

  return config;
};

const useRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const useResponse = (response: any) => {
  return response;
};

const useResponseError = async (error: any): Promise<any> => {
  if (typeof window !== 'undefined' && error.response.status === 401) {
    // client-side logout
  }

  return Promise.reject(error);
};

const setupInterceptors = (axiosInstance: AxiosInstance): AxiosInstance => {
  axiosInstance.interceptors.request.use(useRequest, useRequestError);
  axiosInstance.interceptors.response.use(useResponse, useResponseError);
  return axiosInstance;
};

export const HTTP = setupInterceptors(
  axios.create({
    baseURL: process.env.NEXT_API_BASE,
  }),
);
