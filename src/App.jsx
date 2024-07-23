import SongSuggest from "./SongSuggest";

function App() {
  return (
    <div className="m-10 flex justify-center">
      <div>
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold">song search :3</h1>
          <p className="text-md">simple song lyrics finder made with react</p>
        </div>
        <SongSuggest />
      </div>
    </div>
  );
}

export default App;
