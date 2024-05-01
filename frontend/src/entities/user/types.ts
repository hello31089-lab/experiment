export interface IUser {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface ITask {
  _id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  userId: string;
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAuthResponse {
  token: string;
}

export type TaskStatus = 'todo' | 'in-progress' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';
