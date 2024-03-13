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
    }, 1000);

    return () => clearTimeout(timer); // Clear the timer when component unmounts
  }, []);

  useEffect(() => {
    if (!loading) {
      // If user is not logged in and tries to access protectedPage, redirect to auth page
      if (!user && router.pathname === '/protectedPage') {
        router.push('/auth');
      }
    }
  }, [loading, user, router]);

  const showNavBar = router.pathname !== '/auth' && router.pathname !== '/protectedPage';
  const showFooter = router.pathname !== '/auth' && router.pathname !== '/protectedPage';

  if (showLoading) {
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
