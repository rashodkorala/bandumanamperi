import React from "react";

type Props = {};

const Work = (props: Props) => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-black xsm:px-5">
        <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">Work</h1>
        <div className="flex flex-col md:grid md:grid-flow-col md:grid-cols-3 gap-3">
          
         <div className="bg-black text-white">1</div>
         <div className="bg-black text-white">2</div>
         <div className="bg-black text-white">3</div>

        </div>
      </div>
    </div>
  );
};

export default Work;
