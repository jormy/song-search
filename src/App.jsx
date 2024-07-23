import SongSuggest from "./SongSuggest";

function App() {
  return (
    <div className="flex justify-center">
      <div>
        <div className="">
          <h1 className="font-bold text-3xl">song search</h1>
          <p className="text-md">simple song lyrics finder made with react</p>
          <SongSuggest />
        </div>
      </div>
    </div>
  );
}

export default App;
