import UploadVideo from "./components/UploadVideo"
import Timeline from "./components/timeline"

function App() {
 

  return (

    <div className="min-h-screen p-8 bg-white text-black">
    <h1 className="text-3xl font-bold mb-4">Video Timeline</h1>
    
        <UploadVideo />
        <Timeline />

        </div>
      
  )
}

export default App
