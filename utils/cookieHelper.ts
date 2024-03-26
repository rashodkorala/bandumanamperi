// utils/cookieHelper.ts
import { serialize } from 'cookie';
import { NextApiResponse } from 'next';

export const setAuthCookies = (res: NextApiResponse, token: string) => {
  // Set secure, httpOnly cookies for auth token
  res.setHeader('Set-Cookie', serialize('AuthToken', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    maxAge: 3600, // 1 hour
    path: '/',
    sameSite: 'strict',
  }));
};

export const clearAuthCookies = (res: NextApiResponse) => {
  // Clear auth cookie
  res.setHeader('Set-Cookie', serialize('AuthToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    expires: new Date(0),
    path: '/',
    sameSite: 'strict',
  }));
};
