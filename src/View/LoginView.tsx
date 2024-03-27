import React, { useState, ChangeEvent, useRef } from 'react';
import { useRouter } from 'next/router';
import { login } from '../Controller/authController';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const passwordInputRef = useRef<HTMLInputElement>(null); // Reference to the password input
  const loginButtonRef = useRef<HTMLButtonElement>(null); // Reference to the login button

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent, target: string) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submit behavior
      if (target === 'password') {
        passwordInputRef.current?.focus(); // Focus the password input
      } else if (target === 'login') {
        loginButtonRef.current?.click(); // Trigger the login button click
      }
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    try {
      const response = await login(email, password);
      if (response) {
        router.push('/');
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl animate-slide-in mb-8">Hello Bandu</div>
      <div className="flex flex-col items-center p-8 rounded-lg shadow-lg">
        <input
          type="email"
          placeholder="Email"
          className="w-64 p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          value={email}
          onChange={handleEmailChange}
          onKeyDown={(e) => handleKeyDown(e, 'password')} // Handle key down for email input
          autoFocus // Auto-focus this input on page load
        />
        <input
          type="password"
          placeholder="Password"
          className="w-64 p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
          value={password}
          onChange={handlePasswordChange}
          onKeyDown={(e) => handleKeyDown(e, 'login')} // Handle key down for password input
          ref={passwordInputRef} // Attach the ref for focusing
        />
        <button
          className="w-64 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleLogin}
          ref={loginButtonRef} // Attach the ref for click triggering
        >
          Login
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
