import api from './axios';
import { ITask } from '../entities/task/types';

export const taskApi = {
  getAll: async () => {
    const response = await api.get<ITask[]>('/tasks');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get<ITask>(`/tasks/${id}`);
    return response.data;
  },

  create: async (data: Partial<ITask>) => {
    const response = await api.post<ITask>('/tasks', data);
    return response.data;
  },

  update: async (id: string, data: Partial<ITask>) => {
    const response = await api.put<ITask>(`/tasks/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    await api.delete(`/tasks/${id}`);
  },
};
