import React, { useState } from "react";
import { navLinks, socialLinks, contacts } from "../../data/linksData";
import Link from "next/link";
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const [isMapLoading, setIsMapLoading] = useState(true);
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const handleMapLoad = () => {
    setIsMapLoading(false);
  };

  return (
    <div id="contact" className="w-full h-full md:h-screen bg-white snap-center snap-always p-4 flex flex-col items-center justify-evenly">
      <div className="max-w-[1900px] w-full xsm:h-[80vh] md:h-[50vh] xl:h-[32vh] flex flex-col md:flex-row justify-center items-center text-black xsm:px-5 gap-8">
        {/* Contact Info Column */}
        <div className="w-full h-full justify-start items-start flex ">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-[40px]  md:text-[47px] lg:text-[54px] xl:text-[63px]">Contact</h1>
            <div className="p-2">
            <p className="px-0 pb-2 text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-bold">Bandu Manamperi&apos;s Home & Studio</p>
            {contacts.map((contact, index) => (
                <Link href={contact.path} className={"px-0 pb-1 gap-1 flex items-center text-[18px] md:text-[21px] lg:text-[25px] xl:text-[30px] "} key={index}>
                  <contact.icon size={contact.iconSize} className="mr-1" />
                  {contact.desc}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Google Maps Column */}
        <div className="w-full h-full shadow-2xl border-white border-[1px]  relative">
          {isMapLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Tailwind CSS Spinner (customize as needed) */}
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-black "></div>
            </div>
          )}
          <iframe
            className="w-full h-full"
            title="Google Maps"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/search?q=Bandu%20Manamperi's%20Home%20%26%20Studio&key=${googleMapsApiKey}`}
            onLoad={handleMapLoad}
          />
        </div>
        
      </div>
      {/* Underdevelopment Section */}
    <div className="text-center mt-8 flex flex-col items-center justify-center max-w-[50%]">
      <p className="text-lg md:text-xl lg:text-2xl font-medium mb-4">
        This website is currently under development and testing. We appreciate your patience and feedback during this phase.
      </p>
      <button className="bg-black text-white rounded-[25px] p-3 flex items-center justify-center gap-2">
        <MdEmail size={24} />
        <a href="mailto:rashodkorala2002@gmail.com">Contact Development Team</a>
      </button>
    </div>
    </div>
  );
};

export default Contact;
