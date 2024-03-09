// authController.ts

import { auth } from '@/utils/firebase-config';
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';




export const signUp = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error: any) {
    return error.message;
  }
};

export const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error: any) {
    return error.message;
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
