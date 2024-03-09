// _app.tsx
import Footer from '../src/Components/Footer';
import NavBar from '../src/Components/NavBar';
import { ThemeProvider } from '../src/Components/ThemeContext';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

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
