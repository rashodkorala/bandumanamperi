import React, { useCallback, useEffect, useState } from "react";

import Slider from "../subComponents/imageSlideShow/Slider";
import { viewAllArtworks, viewArtworksByType } from "../../Controller/artworkController";

import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";

import Autoplay from 'embla-carousel-autoplay'

import img1 from '@/public/Assets/installations_and_Sculptures/Instant_Nirvana_Private_Limited_4.jpg'
import img2 from '@/public/Assets/paintings/thousondEggs.jpg'
import img3 from '@/public/Assets/Preformances/IronMan.jpg'
import img4 from '@/public/Assets/Preformances/Bandaged_Body_1.jpg'
import img5 from '@/public/Assets/installations_and_Sculptures/Numbed.jpg'
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";


type Props = {};

const PaintingMain = (props: Props) => {
  const [artworks, setArtworks] = useState<any[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true,}, [Autoplay()])


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
  useEffect(() => {
    // Fetch artworks when the component mounts
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const fetchedArtworks = await viewArtworksByType('Painting');
      setArtworks(fetchedArtworks);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  return (
    <div className="w-full flex flex-col md:pt-16 max-w-[1000px] mx-auto justify-center items-center">
      <div className="p-4 flex flex-col items-center justify-center">
        <h1 className="text-3xl xl:text-[50px] text-center font-bold">Paintings</h1>
        <p className="py-3 text-[14px] xsm:text-md xl:text-xl text-center font-light max-w-[700px]">
          Explore the rich and deeply personal artworks of Bandu Manamperi on this page. Through his use of shapes and patterns, he explores
          the themes of memory and transformation in a deeply personal way. Each painting is a study in balance, harmony, and the ways in
          which external events can shape our individual experiences. Take a moment to browse through the gallery and discover the beauty
          and depth of Bandu&apos;s art.
        </p>
      </div>
      <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((slide, index) => (
                <div className="embla__slide flex justify-center items-center" key={index}>
                  <Image
                    src={slide.url}
                    alt="image"
                    className="w-full max-w-[1000px] rounded-[25px] object-fill"
                  />
                </div>
              ))}
            </div>
          
          </div>
          <button className="bg-transparent text-black dark:text-white p-3" onClick={scrollPrev}><IoIosArrowDropleft size={30}/></button>
          <button className="bg-transparent text-black dark:text-white" onClick={scrollNext}><IoIosArrowDropright size={30}/></button>

        </div>
      <div className="max-w-[1300px] mx-auto px-4 flex justify-center h-full text-black xsm:px-5 p-10">
          <div className="columns-3 gap-3 mx-auto space-y-3">
          {artworks.map((artwork) => (
          <div key={artwork.id}>
            <div className="mt-4">
              {artwork.photos.map((photo: string, index: number) => (
                <Image key={index} src={photo} alt={`Artwork ${index + 1}`} className="w-full mb-2 rounded-lg" width={300} height={300} />
              ))}
            </div>
          </div>
        ))}
          </div>
        </div>
    </div>
  );
};

export default PaintingMain;
