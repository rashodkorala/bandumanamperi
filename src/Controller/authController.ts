// utils/auth.ts
import { auth } from '@/utils/firebase-config';
import { sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import admin from '@/firebaseAdmin';

export const login = async (email: string,password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
    return userCredential.user;
  } catch (error) {
    throw new Error((error as any).message);
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

export const forgetPassword = async (email:string) => {
 
  try {
    await sendPasswordResetEmail(auth, email);
    return true;
  } catch (error) {
    return false;
  }

};

export const verifyToken = async (token: string) => {
  try {
    const userCredential = await admin.auth().verifyIdToken(token);
    return userCredential.user !== null;
    
  } catch (error) {
    return false;
  }
  
}

