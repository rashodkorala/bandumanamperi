import React from "react";
import Artist from "@/public/data/data";

const ArtistCv = () => {
  const groupItemsByYear = (items) => {
    const groupedItems = {};
    items.forEach((item) => {
      if (groupedItems[item.year]) {
        groupedItems[item.year].push(item);
      } else {
        groupedItems[item.year] = [item];
      }
    });
    return groupedItems;
  };

  return (
    <div className="w-full h-full flex flex-col px-3 py-3 mt-8">
      {Artist.map((cv, index) => {
        const groupedItems = groupItemsByYear(cv.items);
        const sortedYears = Object.keys(groupedItems).sort((a, b) => parseInt(b) - parseInt(a));
        return (
          <div key={index} className="mb-6">
            <h1 className="text-2xl font-bold mb-3">{cv.heading}</h1>
            {sortedYears.map((year) => (
              <div key={year} className="mb-4">
                <h2 className="text-lg font-semibold mb-3">{year}</h2>
                {groupedItems[year].map((item, index) => (
                  <p key={index} className="text-sm my-2 ">
                    {`- ${item.discription}`}
                  </p>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ArtistCv;
