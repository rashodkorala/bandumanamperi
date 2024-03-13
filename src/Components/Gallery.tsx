import Image from "next/image";
import React, { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';

function createImage() {
  const images = [];
  for (let index = 0; index < 30; index++) {
    const width = Math.floor(Math.random() * 100) + (index + 10) * 100;
    const height = Math.floor(Math.random() * 100) + (index + 9) * 100;

    images.push({
      id: index + "",
      src: "https://picsum.photos/" + width + "/" + height + "/" + "?random=" + index,
      span: "cols-span-" + Math.floor(Math.random() * 2 + 1),
      width: width,
      height: height,
    });
  }
  return images;
}

const images = createImage();

const Gallery = () => {

  return (
    <div id="gallery" className="w-full">
      
        <div className="max-w-[1300px] mx-auto px-4 flex flex-col justify-center h-full text-black xsm:px-5">
          <div className="columns-3 gap-3 mx-auto space-y-3 py-28">
            {images.map((image) => (
              <div key={image.id} className="break-inside-avoid">
                <Image key={image.id} src={image.src} alt="image" className={image.span} width={image.width} height={image.height} />
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Gallery;
