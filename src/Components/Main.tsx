import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import Contact from './mainPage/Contact';
import About from './mainPage/About';
import Work from './mainPage/Work';

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process, or replace with actual loading logic
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-white">
          <TailSpin color="#000" height={80} width={80} />
        </div>
      )}

      {/* Main Content */}
      {!isLoading && (
        <div className="flex flex-col gap-[45px]">
          <About />
          <Work />
          <Contact />
        </div>
      )}
    </>
  );
};

export default Main;
