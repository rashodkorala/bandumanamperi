import router from 'next/router';
import React from 'react'
import { logout } from '@/src/Controller/authController';
import Link from 'next/link';

type Props = {}

const NavBar = (props: Props) => {

  const handleLogout = async () => {
    const response = await logout();
    if (response) {
      router.push('/login');
    };
  }
  return (
    <div className="flex justify-between items-center py-4 px-6 border-b border-gray-200 dark:border-gray-900 bg-white dark:bg-black">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className='flex flex-row gap-4'>
        <Link href="/">
          Home
        </Link>
        <Link href="/artworks">
          Artworks
        </Link>

      </div>
      <div className='flex flex-row gap-4'>
        <button className="focus:outline-none">Settings</button>
        <button
          className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none text-white"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>


    </div>
  )
}

export default NavBar