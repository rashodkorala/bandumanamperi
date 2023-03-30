import React from "react";

type Props = {};

function PreformanceMain({}: Props) {
  return (
    <div className="w-ful text-black flex flex-col md:pt-16 justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-[100%] flex flex-col">
          {/* <div className="absolute w-[100%] h-[100%] bg-black opacity-70" id="overlay"></div> */}
          <div className="w-full h-[70vh]">
            <video
              src={"/Assets/Preformances/videoBg.mp4"}
              className=" w-full h-full object-cover brightness-50"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="md:absolute w-[100%] h-[100%] top-[-2%] left-0 flex flex-col justify-center items-start text-black md:text-white p-6 max-w-[1000px]">
            <h1 className="text-3xl xl:text-[50px] text-left font-bold leading-10">Preformances</h1>
            <p className="py-6 xxsm:text-[10px] xsm:text-[12px] xl:text-xl text-left font-light max-w-[1200px]">
              Bandu Manamperi is an artist who uses performance as a powerful medium to explore complex social and political issues in Sri
              Lanka. His performances are known for their thought-provoking nature and their ability to evoke strong emotional responses
              from audiences. Through his work, Manamperi seeks to challenge prevailing attitudes and provoke critical reflection on
              pressing social issues such as war, globalization, and cultural commodification. He uses his artistic practice to engage with
              audiences, raising awareness and promoting dialogue about these important issues. Manamperi&apos;s performances are an
              essential part of his artistic practice, helping him to communicate his ideas and engage with his audience in meaningful ways.
            </p>
          </div>
        </div>
      </div>
      <div>{/* <Gallery /> */}</div>
    </div>
  );
}

export default PreformanceMain;
