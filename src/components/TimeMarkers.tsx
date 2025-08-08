import React from "react";

type Props = {
  duration: number;
};

const TimeMarkers = ({ duration }: Props) => {
  const markerGap = 10; // every 10 seconds ek marker
  const totalMarkers = Math.floor(duration / markerGap);

  return (
    <div className="absolute bottom-0 left-0 w-full h-full flex px-4 z-10">
      {[...Array(totalMarkers)].map((_, index) => {
        const time = index * markerGap;
        return (
          <div
            key={index}
            className="text-[10px] text-gray-500"
            style={{ marginRight: "40px" }}
          >
            {time}s
          </div>
        );
      })}
    </div>
  );
};

export default TimeMarkers;
