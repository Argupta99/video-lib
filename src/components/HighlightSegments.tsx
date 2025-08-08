import React from "react";

type Props = {
  duration: number;
};

const HighlightSegments = ({ duration }: Props) => {
  // Dummy data
  const highlights = [
    { start: 10, end: 20 },
    { start: 40, end: 50 },
    { start: 70, end: 80 },
  ];

  return (
    <div className="absolute top-0 left-0 h-full w-full z-0">
      {highlights.map((segment, index) => {
        // Calculate left position and width based on duration
        const left = `${(segment.start / duration) * 100}%`;
        const width = `${((segment.end - segment.start) / duration) * 100}%`;

        return (
          <div
            key={index}
            className="absolute top-0 h-full bg-yellow-300 opacity-30 rounded"
            style={{ left, width }}
          />
        );
      })}
    </div>
  );
};

export default HighlightSegments;
