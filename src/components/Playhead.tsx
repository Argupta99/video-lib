import React from "react";

type Props = {
  currentTime: number;
  duration: number;
  onTimeUpdate: (newTime: number) => void;
};

const PlayHead = ({ currentTime, duration, onTimeUpdate }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect(); // where timeline starts
    const clickX = e.clientX - rect.left; // how far from left user clicked
    const width = rect.width;

    const clickedTime = (clickX / width) * duration;
    onTimeUpdate(clickedTime);
  };

  const leftPosition = (currentTime / duration) * 100;

  return (
    <div
      className="absolute top-0 left-0 w-full h-full cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-red-500"
        style={{ left: `${leftPosition}%` }}
      />
    </div>
  );
};

export default PlayHead;
