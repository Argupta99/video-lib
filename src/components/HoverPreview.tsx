import React, { useState, type RefObject } from "react";


interface Props {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  duration: number;
}


const HoverPreview = ({ duration }: Props) => {
  const [hoverTime, setHoverTime] = useState<number | null>(null);
  const [left, setLeft] = useState<number>(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const time = (x / width) * duration;

    setHoverTime(time);
    setLeft(x);
  };

  const handleMouseLeave = () => {
    setHoverTime(null);
  };

  return (
    <div
      className="absolute top-0 left-0 w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {hoverTime !== null && (
        <div
          className="absolute -top-6 text-xs bg-black text-white px-2 py-1 rounded"
          style={{ left: `${left}px` }}
        >
          {hoverTime.toFixed(1)}s
        </div>
      )}
    </div>
  );
};

export default HoverPreview;
