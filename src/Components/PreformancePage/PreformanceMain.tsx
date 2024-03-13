import React from 'react';

function PreformanceMain() {
 
  return (
    <div className="w-full text-black flex flex-col md:pt-18 justify-center items-center">
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
        <div className="xl:absolute bottom-0 mb-1 w-full flex flex-col justify-center items-baseline p-6 max-w-[1920px]">
          <h1 className="text-[40px] md:text-[50px] xl:text-[60px] text-left font-bold leading-10">Performances</h1>
          <p className="py-6 xxsm:text-[10px] xsm:text-[17px] md:text-[20px] xl:text-[24px] text-left font-light max-w-[1200px]">
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
