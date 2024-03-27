// utils/auth.ts
import { auth } from '@/utils/firebase-config';
import { browserLocalPersistence, sendPasswordResetEmail, setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const login = async (email: string,password: string) => {
  try {
    //add presistant login
    setPersistence(auth, browserLocalPersistence);

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
    if (!userCredential.user) {
      throw new Error('User not found');
    }
    const token = await userCredential.user.getIdToken();
    
   const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }
    return true;
    
  } catch (error) {
    throw new Error((error as any).message);
  }
  
};

export const logout = async () => {
  try {
    await signOut(auth);
    const response = await fetch('/api/auth/logout', {
      method: 'POST',
    });

    if (response){
     return response;
    }

    
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
