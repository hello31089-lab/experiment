import { User } from '../models/User';
import jwt from 'jsonwebtoken';
import { config } from '../config';

export const authService = {
  async register(email: string, password: string, name: string) {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    const user = await User.create({ email, password, name });
    return this.generateToken(user._id.toString(), user.email);
  },

  async login(email: string, password: string) {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid credentials');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      throw new Error('Invalid credentials');
    }

    return this.generateToken(user._id.toString(), user.email);
  },

  generateToken(id: string, email: string) {
    return jwt.sign({ id, email }, config.jwtSecret, {
      expiresIn: config.jwtExpiresIn,
    });
  },
};
