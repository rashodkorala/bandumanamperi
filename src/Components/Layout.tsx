// components/Layout.tsx

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase-config';
import NavBar from './NavBar';
import Footer from './Footer';
import { ThemeProvider } from './ThemeContext';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false); // After 2 seconds, hide the loading screen
    }, 2000);

    return () => clearTimeout(timer); // Clear the timer when component unmounts
  }, []);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user && router.asPath !== '/login' && router.asPath !== '/protectedPage') {
                router.push('/protectedPage');
            }
            if (!user && router.asPath == '/') {
                router.push('/login');
            }
           
        }
        );
    }
    , [router]);


  const showNavBar = router.pathname !== '/login' && router.pathname !== '/protectedPage';
  const showFooter = router.pathname !== '/login' && router.pathname !== '/protectedPage';

  if (loading || showLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold">Loading...</div>
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
