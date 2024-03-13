import React, { useState, useEffect } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import ArtistCv from "../subComponents/ArtistCv.jsx";
import Image from "next/image";

const About = () => {
  const image = {
    id: 1,
    src: "/Assets/profile.jpeg",
    span: "grayscale drop-shadow-xl shadow-2xl w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] rounded-full",
    width: 500,
    height: 1200,
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Lock scrolling when the popup is open
    if (isPopupOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    // Cleanup function to remove overflow-hidden class when unmounting
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isPopupOpen]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div id="about" className="w-full h-full bg-transparent md:h-[105vh] justify-center items-center flex flex-col">
      <div className="max-w-[1900px] mx-auto px-4 flex flex-col justify-center  xsm:px-5">
        <h1 className="text-[40px] md:text-[47px] lg:text-[54px] xl:text-[63px] ">About</h1>
        <div className="flex flex-col py-4 gap-3">
          <div className="">
            <Image key={image.id} src={image.src} alt="image" className={image.span} width={image.width} height={image.height} />
          </div>
          <div>
            <p className="py-4 text-[15px] sm:text-[18px] md:text-[21px] 2xl:text-[28px] text-left font-light">
              <strong className="font-bold">Bandu Manamperi</strong> is a renowned artist who holds a BFA in sculpture and is a part of
              Theertha International Artists&apos; Collective, Sri Lanka. He is a pioneer of performance art in Sri Lanka and continues to be an
              influential figure in the field. He creates deeply personal artworks that focus on the transformation of his own body, while
              also working in other mediums such as sculpture, drawing, painting, and installation. He frequently lectures and consults on
              various topics such as contemporary art, performance, museology, and traditional craft techniques. His art practice explores
              themes of memory and the ways in which external events and ideologies shape our individual experiences and become inscribed in
              our bodies.
            </p>
            <button
              className="flex text-md hover:scale-110 transition-all duration-1000 ease-in-out w-[100px] md:w-[120px] rounded-[45px] px-2 py-1 md:px-4 md:py-2 items-center justify-center"
              onClick={togglePopup}>
              View CV
              <HiArrowCircleRight />
            </button>
            {isPopupOpen && (
              <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50 ">
                <div className=" popup absolute top-0 left-0 w-full h-full bg-white dark:bg-black opacity-70"></div>
                <div className="flex flex-col w-full max-w-[1500px] h-full max-h-[700px] overflow-scroll overflow-x-hidden z-10 bg-white dark:bg-black">
                  <div className="fixed flex justify-center items-center w-full max-w-[1500px] bg-white dark:bg-black">
                    <div className="flex items-center justify-between w-full px-4">
                      <h1 className="text-2xl font-bold">Curriculum Vitae</h1>
                      <div
                        className="cursor-pointer z-50"
                        onClick={togglePopup}>
                        <FaTimes className="" />
                      </div>
                    </div>
                  </div>
                  <div className="py-3">
                    <ArtistCv />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
