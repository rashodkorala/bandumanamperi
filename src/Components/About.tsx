import React, { useState } from "react";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import ArtistCv from "./subComponents/ArtistCv";

type Props = {};

const About = (props: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <div className="w-full h-screen bg-white ">
      <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full text-black xsm:px-5">
        <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">About</h1>
        <div className="flex md:flex-col md:grid md:grid-cols-1 ">
          <p className="py-4 text-[12px] xsm:text-md xl:text-2xl ">
            BANDU MANAMPERI holds a BFA in sculpture and is a core member of
            Colombo’s Theertha Artists’ Collective. One of the initiators of
            performance art in Sri Lanka, Bandu remains one of the leading
            performance artists active at present. He creates highly personal
            art experiences based on the transformation of his own body. His art
            practice also encompasses sculpture, drawing, painting, and
            installation art. He lectures and consults widely on a range of
            topics including contemporary art, performance, museology, and local
            craft traditions. Manamperi’s praxis brings together notions of
            memory, and demonstrates how the effects of external events and
            doctrines are absorbed into the individual’s being through the body
            to create memories that become inscribed within us.
          </p>
        </div>
        {/* <a
          href="https://photosbyrashod.myportfolio.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center text-sm"
        >
          View Artist CV
          <HiArrowCircleRight />
        </a> */}
        <button onClick={() => setIsPopupOpen(true)}>Open CV</button>
      </div>
    </div>
  );
};

export default About;
