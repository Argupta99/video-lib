import Timeline from "./components/Timeline";
import UploadVideo from "./components/UploadVideo";

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-black flex flex-col items-center justify-start p-6">
      <header className="w-full max-w-5xl mb-6 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">🎬 Video Timeline Explorer</h1>
        <p className="text-center text-gray-600 mt-2">
          Upload a video and explore its timeline interactively
        </p>
      </header>

      <main className="w-full max-w-5xl space-y-6">
        <UploadVideo />
        <Timeline />
      </main>
    </div>
  );
}

export default App;
