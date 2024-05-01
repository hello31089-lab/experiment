export interface IUser {
  _id: string;
  email: string;
  password: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITask {
  _id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  userId: string;
  dueDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IProject {
  _id: string;
  name: string;
  description: string;
  ownerId: string;
  memberIds: string[];
  taskIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthRequest {
  user?: {
    id: string;
    email: string;
  };
}
