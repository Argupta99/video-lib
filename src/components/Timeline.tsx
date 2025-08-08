import React, { useRef, useState } from "react";
import HighLightSegments from "../components/HightLightSegments";
import HoverPreview from "../components/HoverPreview";
import PlayHead from "../components/PlayHead";
import TimeMarkers from "../components/TimeMarkers";
import KeyMoments from "../components/keyMoments";

const Timeline = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(100); // Replace with actual duration later
  const [currentTime, setCurrentTime] = useState(0);

  const handleTimeUpdate = (newTime: number) => {
    setCurrentTime(newTime);
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="relative w-full h-24 bg-gray-100 border-t border-b border-gray-300 mt-4">
      <HighLightSegments duration={duration} />
      <TimeMarkers duration={duration} />
      <KeyMoments duration={duration} />
      <HoverPreview videoRef={videoRef} duration={duration} />
      <PlayHead
        duration={duration}
        currentTime={currentTime}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
};

export default Timeline;
