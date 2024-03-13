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

type Props = {};

const SculpturesMain = (props: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true}, [Autoplay()])

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
      const fetchedArtworks = await viewArtworksByType('Sculpture');
      setArtworks(fetchedArtworks);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };
  return (
    <div className="w-full flex flex-col md:pt-16 max-w-[2000px] mx-auto justify-center items-center">
      <div className="p-4 flex flex-col md:flex-row justify-center items-center">
        <div className="p-4 flex flex-col">
          <h1 className="text-3xl xl:text-[50px] text-left font-bold leading-10">Sculptures and Installations</h1>
          <p className="py-6 text-[14px] xsm:text-md xl:text-xl text-left font-light max-w-[1200px]">
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
                    className="w-full max-w-[1000px] rounded-[25px] object-contain"
                  />
                </div>
              ))}
            </div>
          
          </div>
          <button className="bg-transparent text-black dark:text-white p-3" onClick={scrollPrev}><IoIosArrowDropleft size={30}/></button>
          <button className="bg-transparent text-black dark:text-white" onClick={scrollNext}><IoIosArrowDropright size={30}/></button>

        </div>
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

export default SculpturesMain;
