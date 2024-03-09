// _app.tsx

import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import NavBar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';
import { ThemeProvider } from '@/src/components/ThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showFooter = router.pathname !== '/login';
  const showNavBar = router.pathname !== '/login';
  return (
    <ThemeProvider>
      {showNavBar && <NavBar />}
      <Component {...pageProps} />
      {showFooter && <Footer />}
    </ThemeProvider>
  );
}

export default MyApp;
