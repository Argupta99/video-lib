import React, { useRef, useState } from "react";
import HighLightSegments from "../components/HightLightSegments";
import HoverPreview from "../components/HoverPreview";
import PlayHead from "../components/PlayHead";
import TimeMarkers from "../components/TimeMarkers";
import KeyMoments from "../components/keyMoments";

interface TimelineProps {
  duration: number;
  currentTime: number;
  onSeek: (time: number) => void;
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const Timeline = ({ duration, currentTime,videoRef,  onSeek }: TimelineProps) => {
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const seekTime = (offsetX / rect.width) * duration;
    onSeek(seekTime);
  };

  const progressPercent = (currentTime / duration) * 100;
  const handleTimeUpdate = (newTime: number) => {
  if (videoRef.current) {
    videoRef.current.currentTime = newTime;
  }
  onSeek(newTime); 
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
