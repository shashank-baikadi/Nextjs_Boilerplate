// import axios from 'axios';
import { User } from '../../domain/entities/User';

// const API_URL = 'http://localhost:3002';

// export const userApi = {
//   register: async (user: User) => {
//     try {
//       await axios.post(`${API_URL}/users`, user);
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   }
// };


import { httpClient } from './httpClient';

export const userApi = {
  register: async (user: User) => {
    try {
      await httpClient.post<void>('users', user);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  }
};