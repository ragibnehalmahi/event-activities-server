import prisma from '../../shared/prisma.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerUser = async (userData: any) => {
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword,
    },
  });
  return user;
};

const loginUser = async (credentials: any) => {
  const user = await prisma.user.findUnique({
    where: { email: credentials.email },
  });
  if (!user) throw new Error('User not found');
  const isMatch = await bcrypt.compare(credentials.password, user.password);
  if (!isMatch) throw new Error('Invalid password');
  
  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET || 'super-secret-jwt-key',
    { expiresIn: '7d' }
  );
  return { user, token };
};

export const AuthService = { registerUser, loginUser };
