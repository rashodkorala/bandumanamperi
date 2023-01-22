import Image from "next/image";
import React from "react";

function createImage() {
  const images = [];
  for (let index = 0; index < 30; index++) {
    //different sizes of images
    const width = Math.floor(Math.random() * 100) + (index + 10) * 100;
    const height = Math.floor(Math.random() * 100) + (index + 9) * 100;

    images.push({
      id: index + "",
      src:
        "https://picsum.photos/" +
        width +
        "/" +
        height +
        "/" +
        "?random=" +
        index,
      span: "cols-span-" + Math.floor(Math.random() * 2 + 1),
      width: width,
      height: height,
    });
  }
  return images;
}
const images = createImage();
type Props = {};

const Gallery = (props: Props) => {
  // const images = createImage();
  return (
    <div className="w-full bg-white">
      <div className="max-w-[1300px] mx-auto px-4 flex flex-col justify-center h-full text-black xsm:px-5">
        <h1 className="font-bold text-3xl xsm:text-4xl sm:text-5xl">Gallery</h1>
        <div className="columns-3 gap-3 mx-auto space-y-3 py-28">
          {images.map((image) => (
            <div className="break-inside-avoid">
              <Image
                src={image.src}
                alt="image"
                className={image.span}
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
