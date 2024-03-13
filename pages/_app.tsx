import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/Footer";
import { ThemeProvider } from "../src/Components/subComponents/ThemeContext";
import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process, or replace with actual loading logic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {isLoading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-white dark:bg-black text-black dark:text-white">
          <TailSpin color="#000" height={80} width={80} />
        </div>
      )}
      {!isLoading && (
      <ThemeProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
      )}
    </>
  );
}
