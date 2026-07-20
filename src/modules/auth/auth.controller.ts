import type { Request, Response } from 'express';
import { AuthService } from './auth.service.js';

const register = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.registerUser(req.body);
    res.status(201).json({ success: true, message: 'User registered', data: user });
  } catch (error: any) {
    res.status(400).json({ success: false, message: 'Registration failed', error: error.message });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const result = await AuthService.loginUser(req.body);
    res.status(200).json({ success: true, message: 'Login successful', data: result });
  } catch (error: any) {
    res.status(401).json({ success: false, message: 'Invalid credentials', error: error.message });
  }
};

export const AuthController = { register, login };
