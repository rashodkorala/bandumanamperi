import React, { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";

//import x icon from react-icons
import { FaTimes } from "react-icons/fa";
import ArtistCv from "./subComponents/ArtistCv.jsx";

import Image from "next/image";
import Link from "next/link";

// import Data from "../data/data";

type Props = {};

const About = (props: Props) => {
  const image = {
    id: 1,
    src: "/Assets/profile.jpeg",
    span: "grayscale drop-shadow-xl shadow-2xl md:w-[600px] md:h-[400px]",
    width: 500,
    height: 1500,
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [scroll, setScroll] = useState(true);

  const changeNav = () => {
    scroll ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "scroll");
  };

  return (
    <div id="about" className="overflow-hidden  w-full h-screen bg-white snap-always snap-start mt-[50px] md:mt-[0]">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-black xsm:px-5">
        <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">About</h1>
        <div className="flex flex-col py-4 gap-3">
          <div className="">
            <Image key={image.id} src={image.src} alt="image" className={image.span} width={image.width} height={image.height} />
          </div>
          <div>
            <p className="py-4 text-[13px] xsm:text-md xl:text-2xl text-left font-light ">
              <strong className="font-bold">Bandu Manamperi</strong> is a renowned artist who holds a BFA in sculpture and is a part of
              Colombo&apos;s Theertha Artists&apos; Collective. He is a pioneer of performance art in Sri Lanka and continues to be an
              influential figure in the field. He creates deeply personal artworks that focus on the transformation of his own body, while
              also working in other mediums such as sculpture, drawing, painting, and installation. He frequently lectures and consults on
              various topics such as contemporary art, performance, museology, and traditional craft techniques. His art practice explores
              themes of memory and the ways in which external events and ideologies shape our individual experiences and become inscribed in
              our bodies.
            </p>
            <button
              className="flex text-md hover:scale-110 transition-all duration-1000 ease-in-out bg-black w-[100px] md:w-[120px] text-white rounded-[45px] px-2 py-1 md:px-4 md:py-2 items-center justify-center"
              onClick={() => {
                setIsPopupOpen(true), setScroll(false);
              }}>
              View CV
              <HiArrowCircleRight />
            </button>
            {isPopupOpen && (
              <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center z-50">
                <div className="absolute top-0 left-0 w-full h-full bg-white opacity-20 " id="overlay"></div>
                <div className="w-full max-w-[2000px] max-h-[900px] overflow-scroll mx-auto rounded py-4 text-left px-6 z-10 bg-[#ececec] flexflex-col transition-all duration-100 scale-105 ease-out">
                  <div className="flex justify-between items-center pb-3 opacity-100" id="header">
                    <h1 className="text-2xxl font-bold text-black">Curriculum Vitae</h1>
                    <div
                      className="cursor-pointer z-50"
                      onClick={() => {
                        {
                          setIsPopupOpen(false), setScroll(true), changeNav();
                        }
                      }}>
                      <FaTimes />
                    </div>
                  </div>
                  <div className="">
                    <ArtistCv />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* <Link
            href="/artistcv"
            className="p-4 flex text-md hover:scale-110 transition-all duration-1000 ease-in-out bg-black w-[130px] text-white rounded-[45px] px-4 py-2 items-center justify-center space-x-2"
          >
            View CV
            <HiArrowCircleRight />
          </Link> */}
        </div>

        {/* <button onClick={() => setIsPopupOpen(true)}>Open CV</button> */}
      </div>
    </div>
  );
};

export default About;
