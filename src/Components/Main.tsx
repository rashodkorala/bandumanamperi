import React from 'react';

type Props = {}

function Main({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl animate-slide-in mb-8">Welcome Bandu!</div>
      <div className="flex flex-col items-center">
        <input type="email" placeholder="Email" className="w-64 p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
        <input type="password" placeholder="Password" className="w-64 p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
        <button className="w-64 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
      </div>
    </div>
  );
}

export default Main;
