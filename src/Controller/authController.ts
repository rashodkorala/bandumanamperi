// authController.ts

import { auth } from '@/utils/firebase-config';
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';



export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      return 'User not found';
    }
    if (error.code === 'auth/invalid-credential') {
      return 'Invalid credentials';
    }
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    return false;
  }
};

//forgetPassword
export const forgetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return true;
    } catch (error) {
        return (error as any).message;
    }
};