import React from "react";
import Artist from "../../data/data";

const ArtistCv = () => {
  return (
    <div className="">
      {Artist.map((cv, index) => {
        return (
          <div key={index}>
            <h1 className="text-[25px] py-3">{cv.heading}</h1>
            {cv.items.map((item, index) => {
              return (
                <div key={index}>
                  <p className="text-[16px] p-1">
                    {`${item.year}
                     ${item.discription}`}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ArtistCv;
