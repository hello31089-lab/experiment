import { Router } from 'express';
import { authService } from '../services/auth.service';

const router = Router();

router.post('/register', async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const token = await authService.register(email, password, name);
    res.status(201).json({ token });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
});

export default router;
