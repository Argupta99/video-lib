import { useState } from "react";

const UploadVideo = () => {
    // State to hold the video file
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
   
  //file handler function 

  const handlerUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
        const videoUrl = URL.createObjectURL(file);
    }
  };
  
  //button click handler to trigger file input

  const handleInput = () => {
    setVideoSrc("/path/to/video.mp4"); 
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

<button onClick={handleInput} className="mt-4 bg-blue-500 text-white p-2 rounded">
    Sample Video

</button>

{/**show video when it is available is videoSrc */}

{videoSrc && (
    <video
 src="{videoSrc}"
controls
width="100%"
className="rounded shadow-lg mt-2"
/>
)}
</div>

    );
  }; 

export default UploadVideo; 