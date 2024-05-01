import api from './axios';

export const authApi = {
  login: async (email: string, password: string) => {
    const response = await api.post<{ token: string }>('/auth/login', {
      email,
      password,
    });
    return response.data;
  },

  register: async (email: string, password: string, name: string) => {
    const response = await api.post<{ token: string }>('/auth/register', {
      email,
      password,
      name,
    });
    return response.data;
  },
};
