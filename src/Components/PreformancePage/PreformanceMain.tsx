import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

function PreformanceMain() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full text-black flex flex-col md:pt-18 justify-center items-center">
      {isLoading && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex justify-center items-center bg-white">
          <TailSpin color="#000" height={80} width={80} />
        </div>
      )}

      <div className="relative w-full flex flex-col items-center">
        <video
          src={"/Assets/Preformances/tpp2022.mp4"}
          className="w-full h-[60vh] md:h-auto object-cover brightness-50"
          loop
          muted
          playsInline
          autoPlay
        />

        {/* Absolute positioned text for md screens and up */}
        <div className="md:absolute bottom-0 mb-1 w-full flex flex-col justify-center items-baseline text-black md:text-white p-6 max-w-[1920px]">
          <h1 className="sm:text-[40px]px md:text-[50px] xl:text-[60px] text-left font-bold leading-10">Performances</h1>
          <p className="py-6 xxsm:text-[10px] xsm:text-[17px] md:text-[20px] xl:text-[24px] text-left font-light max-w-[1280px]">
            Bandu Manamperi is an artist who uses performance as a powerful medium to explore complex social and political issues in Sri
            Lanka. His performances are known for their thought-provoking nature and their ability to evoke strong emotional responses
            from audiences. Through his work, Manamperi seeks to challenge prevailing attitudes and provoke critical reflection on
            pressing social issues such as war, globalization, and cultural commodification. He uses his artistic practice to engage with
            audiences, raising awareness and promoting dialogue about these important issues. Manamperi&apos;s performances are an
            essential part of his artistic practice, helping him to communicate his ideas and engage with his audience in meaningful ways.
          </p>
        </div>
      </div>
      {/* <Gallery /> */}
    </div>
  );
}

export default PreformanceMain;
