import React from 'react';

import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const showFooter = router.pathname !== '/login';
  const showNavBar = router.pathname !== '/login';
  return (
   
   
      <Component {...pageProps} />
     
   
  );
}

export default MyApp;
