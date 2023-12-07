import React from "react";

type Props = {};

function PreformanceMain({}: Props) {
  return (
    <div className="w-full text-black flex flex-col md:pt-18 justify-center items-center">
    <div className="flex flex-col justify-evenly items-center w-full"> 
      <div className="w-full h-full flex flex-col">
        <video
          src={"/Assets/Preformances/tpp2022.mp4"}
          className="w-full h-[70vh] object-cover brightness-50"
          loop
          muted
          playsInline
          autoPlay
        />
      </div>
      <div className="md:absolute mb-1 w-full flex flex-col justify-center items-baseline text-black md:text-white p-6 max-w-[1920px]">
        <h1 className="text-5xl xl:text-[60px] text-left font-bold leading-10">Performances</h1>
        <p className="py-6 xxsm:text-[10px] xsm:text-[18px] xl:text-xl text-left font-light max-w-[1200px]">
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
