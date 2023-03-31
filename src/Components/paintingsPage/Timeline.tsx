import React from "react";
import Image from "next/image";

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      <div className="border-l-2 border-gray-200 absolute h-full top-0 z-10" style={{ left: "50%" }}></div>
      <div className="max-w-screen-xl mx-auto relative">
        {events.map((event, index) => (
          <div key={index} className="mb-8 last:mb-0 w-1/2">
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-500 text-sm">{event.date}</div>
              <div className="bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center">
                <div className="bg-white w-4 h-4 rounded-full"></div>
              </div>
            </div>
            <div className="p-6 bg-gray-200 rounded-lg">
              <div className="font-bold text-lg mb-2">{event.title}</div>
              <div className="text-gray-700 text-base">{event.description}</div>
              <Image src={event.image} alt={event.title} width={400} height={400} className="mt-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
