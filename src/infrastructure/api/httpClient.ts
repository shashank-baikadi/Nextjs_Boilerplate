import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_URL = 'http://localhost:3002';

export const httpClient = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => 
    axios.get(`${API_URL}/${url}`, config),
  post: <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => 
    axios.post(`${API_URL}/${url}`, data, config),
  put: <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => 
    axios.put(`${API_URL}/${url}`, data, config),
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => 
    axios.delete(`${API_URL}/${url}`, config),
};