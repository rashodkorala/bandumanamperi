import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { viewArtworksByType } from '@/src/Controller/artworkController';
import Link from 'next/link';



function PreformanceMain() {
  const [artworks, setArtworks] = useState<any[]>([]);

  useEffect(() => {
    // Fetch artworks when the component mounts
    fetchArtworks();
  }, []);

  const fetchArtworks = async () => {
    try {
      const fetchedArtworks = await viewArtworksByType('Performance');
      setArtworks(fetchedArtworks);
    } catch (error) {
      console.error('Error fetching artworks:', error);
    }
  };
  return (
    <div className="w-full text-black flex flex-col md:pt-18 justify-center items-center">
      <div className="relative w-full flex flex-col items-center">
        <video
          src={"/Assets/Preformances/tpp2022.mp4"}
          className="w-full h-[60vh] md:h-auto object-cover brightness-50"
          loop
          muted
          playsInline
          autoPlay
        />
        {/* Absolute positioned text for md screens and up */}
        <div className="xl:absolute bottom-0 mb-1 w-full flex flex-col justify-center items-baseline p-6 max-w-[1920px]">
          <h1 className="text-[40px] md:text-[50px] xl:text-[60px] text-left font-bold leading-10">Performances</h1>
          <p className="py-6 xxsm:text-[10px] xsm:text-[17px] md:text-[20px] xl:text-[24px] text-left font-light max-w-[1200px]">
            Bandu Manamperi is an artist who uses performance as a powerful medium to explore complex social and political issues in Sri
            Lanka. His performances are known for their thought-provoking nature and their ability to evoke strong emotional responses
            from audiences. Through his work, Manamperi seeks to challenge prevailing attitudes and provoke critical reflection on
            pressing social issues such as war, globalization, and cultural commodification. He uses his artistic practice to engage with
            audiences, raising awareness and promoting dialogue about these important issues. Manamperi&apos;s performances are an
            essential part of his artistic practice, helping him to communicate his ideas and engage with his audience in meaningful ways.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
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
}

export default PreformanceMain;
