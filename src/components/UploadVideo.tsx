import { useRef, useState, useEffect } from "react";
import Timeline from "./Timeline";

const UploadVideo = () => {
  // --- Refs and State 
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // --- Handlers 
  const handlerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      setVideoSrc(videoUrl);
    }
  };

  const handleSampleVideo = () => {
    setVideoSrc('/video/sample.mp4');
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  return (
    <div>
      <h2>Upload or Sample Video</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handlerUpload}
        className="border p-2"
      />
      <button onClick={handleSampleVideo} className="mt-4 bg-blue-500 text-white p-2 rounded">
        Sample Video
      </button>

      {/* Show video when it is available in videoSrc */}
      {videoSrc && (
        // FIX #1: Added a wrapper div for better structure
        <div className="mt-4">
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            width="100%"
            autoPlay
            muted
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onError={(e) => console.error("Video load error:", e)}
            className="rounded shadow-lg mt-2 w-full h-auto"
          />

          
          
          {duration > 0 && (
            <Timeline
              duration={duration}
              currentTime={currentTime}
              onSeek={(time: number) => {
                if (videoRef.current) {
                  videoRef.current.currentTime = time;
                }
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default UploadVideo;