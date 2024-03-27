// pages/api/auth/login.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import { login } from '@/src/Controller/authController';
import admin from '@/firebaseAdmin';

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
   
    //get token from authorization header
    const token = req.headers.authorization?.split('Bearer ')[1];
    // const user = await login(email, password);

    if (token) {
      // Login successful, set a cookie with the token
        const istokenValid = await admin.auth().verifyIdToken(token);
    
        if (!istokenValid) {
          res.status(401).json({ success: false, message: 'Token verification failed'});
        }


      const cookie = serialize('AuthToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/',
      });

      res.setHeader('Set-Cookie', cookie);
      res.status(200).json({ success: true });
    } else {
      // Login failed, handle according to the error
      res.status(401).json({ success: false, message: 'Invalid credentials'});
    }
  } else {
    // Handle any non-POST requests
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default loginHandler;
