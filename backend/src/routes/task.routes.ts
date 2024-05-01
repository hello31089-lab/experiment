import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { taskService } from '../services/task.service';
import { AuthRequest } from '../types';

const router = Router();

router.use(authenticate);

router.get('/', async (req, res) => {
  try {
    const userId = (req as AuthRequest).user?.id;
    if (!userId) {
      res.status(401).json({ message: 'User not found' });
      return;
    }
    const tasks = await taskService.getAllTasks(userId);
    res.json(tasks);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const userId = (req as AuthRequest).user?.id;
    if (!userId) {
      res.status(401).json({ message: 'User not found' });
      return;
    }
    const { title, description, priority, dueDate } = req.body;
    const task = await taskService.createTask(
      { title, description, priority, dueDate },
      userId
    );
    res.status(201).json(task);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userId = (req as AuthRequest).user?.id;
    if (!userId) {
      res.status(401).json({ message: 'User not found' });
      return;
    }
    const task = await taskService.getTaskById(req.params.id, userId);
    res.json(task);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const userId = (req as AuthRequest).user?.id;
    if (!userId) {
      res.status(401).json({ message: 'User not found' });
      return;
    }
    const task = await taskService.updateTask(req.params.id, req.body, userId);
    res.json(task);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const userId = (req as AuthRequest).user?.id;
    if (!userId) {
      res.status(401).json({ message: 'User not found' });
      return;
    }
    await taskService.deleteTask(req.params.id, userId);
    res.status(204).send();
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
