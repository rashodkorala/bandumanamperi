import React from "react";
import { MdClose, MdEmail } from "react-icons/md";

const Popup = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-40">
      <div className="bg-white rounded-lg w-[300px] h-[300px] sm:w-[] sm:h-[] md:w-[] md:h-[] lg:w-[] lg:h-[] xl:w-[] xl:h-[] 2xl:w-[] 2xl:h-[] flex flex-col justify-center items-center relative p-4">
        {/* Close button in the top right corner */}
        <button 
            className="absolute top-3 right-3 text-white bg-black rounded-full p-2 m-1 hover:bg-gray-700 transition-colors duration-300"
            onClick={onClose}
        >
            x
        </button>
        
        <div className="text-center flex flex-col items-center justify-center">
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl font-medium mb-4 text-center">
            This website is currently under development and testing. We appreciate your patience and feedback during this phase. Please scroll to contact us if you have any questions, feedback, or concerns.
            Thank you! 
          </p>
          <strong>- The Development Team-</strong>

          {/* <button className="bg-black text-white rounded-[25px] py-2 px-4 flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-300">
            <MdEmail size={20} className="md:size-24" />
            <a href="mailto:rashodkorala2002@gmail.com" className="text-sm md:text-base lg:text-lg">
              Contact Development Team
            </a>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
