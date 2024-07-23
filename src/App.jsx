import SongSuggest from './SongSuggest';

function App() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="mt-96">
          <h1 className="font-bold text-3xl">Lyrics Finder :3</h1>
          <SongSuggest />
        </div>
      </div>
    </div>
  );
}

export default App;
