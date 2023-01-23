import React, { useState } from "react";

const ArtistCv = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Artist CV</h1>
          <p className="text-xl">Click on the button below to download my CV</p>

          <button
            className="bg-black text-white rounded-[25px] py-3"
            onClick={() => setIsPopupOpen(true)}
          >
            Download CV
          </button>

          {isPopupOpen && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50"></div>

              <div className="bg-white w-full md:max-w-full mx-auto rounded shadow-lg py-4 text-left px-6">
                <div className="flex justify-between items-center pb-3">
                  <p className="text-2xl font-bold">Download f CV</p>
                  <div
                    className="cursor-pointer z-50"
                    onClick={() => setIsPopupOpen(false)}
                    
                  >close</div>
                  Hello Hi
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtistCv;
