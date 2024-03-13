import React, { useCallback} from "react";

import Link from "next/link";
import Image from "next/image";

import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

import img1 from '@/public/Assets/installations_and_Sculptures/Instant_Nirvana_Private_Limited_4.jpg'
import img2 from '@/public/Assets/paintings/thousondEggs.jpg'
import img3 from '@/public/Assets/Preformances/IronMan.jpg'
import img4 from '@/public/Assets/Preformances/Bandaged_Body_1.jpg'
import img5 from '@/public/Assets/installations_and_Sculptures/Numbed.jpg'
import { useRouter } from "next/router";

type Props = {};
const Work = (props: Props) => {

  const router=useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, }, [Autoplay()])


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


  return (
    <div
      id="work"
      className="w-full h-full snap-center snap-always p-4 flex items-center justify-center"
    >
      <div className="max-w-[1900px] w-full h-full flex flex-col justify-center items-center xsm:px-5">
        <div className="flex w-full">
          <h1 className="font-bold text-[40px] md:text-[47px] lg:text-[54px] xl:text-[63px]">
            Work
          </h1>
        </div>
        <div className="embla w-full max-w-[1000px]">
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

        <div className="py-6 p-6 flex flex-col md:grid md:grid-flow-col md:grid-cols-3 gap-3">
        <button className="rounded-[25px] p-3" onClick={() => router.push('/paintings')}>
          Paintings and Drawings
        </button>
        <button className="rounded-[25px] p-3"  onClick={() => router.push('/performances')}>
          Performances
        </button>
        <button className="rounded-[25px] p-3"  onClick={() => router.push('/sculptures')}>
          Sculptures and Installations
        </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
