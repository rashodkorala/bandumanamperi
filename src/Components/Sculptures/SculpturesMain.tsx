import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import img1 from '@/public/Assets/installations_and_Sculptures/Instant_Nirvana_Private_Limited_4.jpg'
import img2 from '@/public/Assets/paintings/thousondEggs.jpg'
import img3 from '@/public/Assets/Preformances/IronMan.jpg'
import img4 from '@/public/Assets/Preformances/Bandaged_Body_1.jpg'
import img5 from '@/public/Assets/installations_and_Sculptures/Numbed.jpg'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { viewArtworksByType } from "@/src/Controller/artworkController";
import Link from "next/link";

type Props = {};

const SculpturesMain = (props: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const slides = [
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
  ]

  const [artworks, setArtworks] = useState<any[]>([]);
  useEffect(() => {
    // Fetch artworks when the component mounts
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const fetchedArtworks = await viewArtworksByType('Installations');
      setArtworks(fetchedArtworks);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };
  return (
    <div className="w-full flex flex-col md:mt-[130px] max-w-[1900px] mx-auto justify-center items-center">
     <div className="w-full h-full flex flex-col md:flex-row">
     <div className="p-4 flex flex-col items-center justify-center">
        <h1 className="w-full text-3xl xl:text-[50px] text-left font-bold">Sculptures and Installations</h1>
        <p className="py-9 text-[14px] xsm:text-md xl:text-xl text-left font-light max-w-[700px]">
        Bandu Manamperi&apos;s artistic work delves deeply into the complex and multifaceted issues surrounding the commercialization
            and commodification of cultural symbols in Sri Lankan society. Through his sculptures and installations, he confronts and
            challenges the ways in which cultural heritage and identity are often reduced to mere commodities in a market-driven economy.
            <br></br>
            Furthermore, Bandu Manamperi&apos;s exploration of the theme of war and its effects on society through performance art
            highlights the profound impact that conflict and violence can have on individuals and communities. By using his artistic
            practice to raise awareness and encourage critical reflection on these pressing social issues, the artist contributes to a
            deeper understanding of the complexities and challenges facing contemporary Sri Lankan society.
        </p>
      </div>
      <div className="embla w-full max-w-[1000px]">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide, index) => (
              <div className="embla__slide flex justify-center items-center" key={index}>
                <Image
                  src={slide.url}
                  alt="image"
                  className="w-full max-w-[1200px] rounded-[25px] object-fill"
                />
              </div>
            ))}
          </div>

        </div>
        <button className="bg-transparent text-black dark:text-white p-3" onClick={scrollPrev}><IoIosArrowDropleft size={30} /></button>
        <button className="bg-transparent text-black dark:text-white" onClick={scrollNext}><IoIosArrowDropright size={30} /></button>

      </div>
     </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-700 ease-in-out transform hover:scale-105 focus:scale-105">
            <div className="flex justify-center items-cente">
            <Image
              src={artwork.photos[0]}
              alt="image"
              className="rounded-t-lg object-fill brightness-75"
              width={400}
              height={200}
            />
            </div>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{artwork.name}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{artwork.description}</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Year: {artwork.date}</p>
              <Link href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:bg-blue-800 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:bg-blue-700">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SculpturesMain;
