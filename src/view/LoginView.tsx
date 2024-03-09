import React, { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import { login } from '../Controller/authController';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    try {
      login(email, password).then((res) => {
        if (res) {
          router.push('/');
        } else {
          // Handle error messages to the user
          setError(res.message);
        }
      });
    } catch (error:any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="text-3xl animate-slide-in mb-8">Welcome Bandu</div>
      <div className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
        <input 
          type="email" 
          placeholder="Email" 
          className="w-64 p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          value={email}
          onChange={handleEmailChange}
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-64 p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          value={password}
          onChange={handlePasswordChange}
        />
        <button 
          className="w-64 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleLogin} 
        >
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
