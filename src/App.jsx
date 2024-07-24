import SongSuggest from "./SongSuggest";

function App() {
  return (
    <div className="min-h-[100vh] min-w-full overflow-auto bg-coal">
      <div className="m-10 flex justify-center font-body text-gray-50">
        <div>
          <div className="text-center">
            <h1 className="mb-3 inline-block bg-gradient-to-r from-[#4285f4] via-[#9b72cb] to-[#d96570] bg-clip-text p-2 text-6xl font-bold text-transparent">
              song searcher
            </h1>
            <p className="text-lg text-coal-50">
              simple song lyrics finder made with react
            </p>
          </div>
          <SongSuggest />
        </div>
      </div>
    </div>
  );
}

export default App;
