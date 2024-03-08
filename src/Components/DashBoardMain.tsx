import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import React from 'react'
import app from '../../utils/firebase-config';

type Props = {}

const DashBoardMain = (props: Props) => {
    const router = useRouter();

    const handleLogout = async () => {
      try {
        const auth = getAuth(app);
        await signOut(auth);
        // Redirect the user to the login page
        router.push('/');
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };
  return (
    <div className="bg-gray-100 h-screen">
      <div className="flex justify-between items-center bg-white py-4 px-6 border-b border-gray-200">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <button
          className="text-white bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className="container mx-auto py-8 px-4">
        <h2 className="text-xl font-semibold mb-4">Welcome to the CMS Dashboard!</h2>
        {/* Your dashboard content goes here */}
      </div>
    </div>
    );
  }


export default DashBoardMain