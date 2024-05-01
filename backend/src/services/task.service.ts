import { Task } from '../models/Task';
import { ITask } from '../types';

export const taskService = {
  async getAllTasks(userId: string) {
    return Task.find({ userId }).sort({ createdAt: -1 });
  },

  async getTaskById(id: string, userId: string) {
    const task = await Task.findOne({ _id: id, userId });
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  },

  async createTask(data: Partial<ITask>, userId: string) {
    const task = await Task.create({ ...data, userId });
    return task;
  },

  async updateTask(id: string, data: Partial<ITask>, userId: string) {
    const task = await Task.findOneAndUpdate(
      { _id: id, userId },
      data,
      { new: true }
    );
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  },

  async deleteTask(id: string, userId: string) {
    const task = await Task.findOneAndDelete({ _id: id, userId });
    if (!task) {
      throw new Error('Task not found');
    }
    return task;
  },
};
