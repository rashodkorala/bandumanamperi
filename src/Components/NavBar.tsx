import { signOut } from 'firebase/auth';
import router from 'next/router';
import React from 'react'
import { auth } from './../../utils/firebase-config';

type Props = {}

const NavBar = (props: Props) => {
    
    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };
  return (
    <div className="flex justify-between items-center py-4 px-6 border-b border-gray-200 dark:border-gray-900">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <button
                    className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
  )
}

export default NavBar