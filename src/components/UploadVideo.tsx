//video and timeline layout 

import {useRef} from "react";
import { useState } from "react";

const UploadVideo = () => {
//reference to video element 
const videoRef = useRef<HTMLVideoElement>(null)
    // State to hold the video file
  const [videoSrc, setVideoSrc] = useState<string| null>(null);
   
  //file handler function 

  const handlerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
        const videoUrl = URL.createObjectURL(file);
        setVideoSrc(videoUrl);
    }


  };
  
  //sample video on button click

  const handleSampleVideo = () => {
    const video = videoRef.current;
  if (video) {
    video.pause();
    video.removeAttribute('src'); 
    video.load();                 
  }

    setVideoSrc('/video/sample.mp4'); // Replace with your sample video URL


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

{/**show video when it is available is videoSrc */}

{videoSrc && (
    <video
    key={videoSrc} // Ensure the video element updates when the source changes
 ref={videoRef}
 src={videoSrc}
controls
width="100%"
autoPlay
muted
 onError={(e) => console.error("Video load error:", e)}
className="rounded shadow-lg mt-2 w-full h-auto"
/>
)}
</div>

    );
  }; 

export default UploadVideo; 