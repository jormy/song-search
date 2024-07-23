import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";

function Lyrics({ lyricsData }) {
  const initialValue = <FaRegCopy />;
  const [buttonText, setButtonText] = useState(initialValue);

  const handleClick = async () => {
    await navigator.clipboard.writeText(lyricsData.lyrics);
    setButtonText(<FaCheck />);
    setTimeout(() => {
      setButtonText(initialValue);
    }, 3000);
  };

  return (
    <div className="bg-coal-950 rounded-lg p-5">
      <div className="flex justify-between">
        <div className="mb-5 flex gap-3">
          <img
            className="h-24 w-24 rounded-lg"
            src={lyricsData.albumArt}
            alt="Album art"
          />
          <div>
            <h2 className="max-w-72 font-bold">{lyricsData.title}</h2>
            <h3>{lyricsData.artist}</h3>
            <h4 className="text-coal-50 font-light">{lyricsData.albumName}</h4>
          </div>
        </div>
        <button
          className="text-coal-500 hover:text-coal-300 h-10 w-10 p-2 text-2xl transition"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
      <p className="text-coal-50 whitespace-pre-line">{lyricsData.lyrics}</p>
    </div>
  );
}

export default Lyrics;
