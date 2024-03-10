import React, { useEffect, useState } from "react";
import Gallery from "../Gallery";
import Slider from "../subComponents/imageSlideShow/Slider";
import { viewArtworksByType } from "../../Controller/artworkController";
import Image from 'next/image';


type Props = {};

const PaintingMain = (props: Props) => {
  const [artworks, setArtworks] = useState<any[]>([]);

  useEffect(() => {
    // Fetch artworks when the component mounts
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const fetchedArtworks = await viewArtworksByType('painting');
      setArtworks(fetchedArtworks);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };

  const slides = [
    {
      url: "/Assets/installations_and_Sculptures/Instant_Nirvana_Private_Limited_4.jpg",
    },
    {
      url: "/Assets/paintings/thousondEggs.jpg",
    },
    {
      url: "/Assets/Preformances/IronMan.jpg",
    },

    {
      url: "/Assets/Preformances/Bandaged_Body_1.jpg",
    },
    {
      url: "/Assets/installations_and_Sculptures/Numbed.jpg",
    },
  ];
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
      <div className="flex flex-col w-full justify-center items-center">
        <Slider setHoveredSlideIndex={0} hoveredSlideIndex={0} slides={slides} />
      </div>
      <div className="flex flex-wrap justify-center">
      {artworks.map((artwork) => (
          <div key={artwork.id} className="border rounded-lg p-4">
            {/* <h2 className="text-xl font-semibold">{artwork.name}</h2>
            <p className="text-gray-600">{artwork.date}</p>
            <p className="text-gray-700">{artwork.description}</p> */}
            <div className="mt-4">
              {artwork.photos.map((photo: string, index: number) => (
                <Image key={index} src={photo} alt={`Artwork ${index + 1}`} className="w-full mb-2 rounded-lg" width={300} height={300} />
              ))}
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default PaintingMain;
