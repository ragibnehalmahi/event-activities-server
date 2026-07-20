// src/modules/auth/auth.interface.ts
export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  role?: 'USER' | 'HOST';
}

export interface IAuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    image?: string;
    interests?: string[];
  };
  accessToken: string;
  refreshToken: string;
}

export interface IJwtPayload {
  id: string;
  email: string;
  role: string;
}

export interface IResetPasswordRequest {
  token: string;
  newPassword: string;
}

export interface IChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
}