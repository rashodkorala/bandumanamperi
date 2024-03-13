// components/Layout.tsx

import { useState, useEffect, use } from 'react';
import { useRouter } from 'next/router';

import { auth } from '@/utils/firebase-config';
import { getAuth } from 'firebase/auth';
import NavBar from './NavBar';
import Footer from './Footer';
import { ThemeProvider } from './ThemeContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false); // After 2 seconds, hide the loading screen
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer when component unmounts
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        router.push('/auth');
      }
    });

    return () => unsubscribe();
  }
  , [router]);

  
  const showNavBar = router.pathname !== '/login' && router.pathname !== '/protectedPage';
  const showFooter = router.pathname !== '/login' && router.pathname !== '/protectedPage';

  if (showLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <ThemeProvider>
      {showNavBar && <NavBar />}
      <div className="min-h-screen">
        {children}
      </div>
      {showFooter && <Footer />}
    </ThemeProvider>
  );
};

export default Layout;
