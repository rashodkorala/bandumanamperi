import React from "react";

const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-white snap-center snap-always p-4 flex items-center">
      <div className="mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-black xsm:px-5 gap-8">
        {/* Contact Information Column */}
        <div className="md:w-1/3 flex flex-col justify-center items-start">
          <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl text-left mb-4">Contact</h1>
          <p className="text-xl mb-2"><strong>Phone:</strong><a href="tel:+94773672789" className="text-xl mb-2 hover:text-gray-500">
             +94 773672789
          </a></p> 
         <p className="text-xl mb-2"> <strong>Email:</strong> <a href="mailto:bandumanamperi@yahoo.com" className="text-xl mb-2 hover:text-gray-500">
            bandumanamperi@yahoo.com
          </a></p>
          <a className="text-xl mb-2">
            <strong>Address:</strong> 67A1, Ihalawatta, Delgaswatta Temple Road, Weedagama, Bandaragama
          </a>
        </div>

        {/* Google Maps Column */}
        <div className="md:w-[500px] flex">
          <iframe
            className="w-full"
            style={{ height: '500px' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/search?q=Bandu%20Manamperi's%20Home%20%26%20Studio&key=${googleMapsApiKey}`}

            >
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
