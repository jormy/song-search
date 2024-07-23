import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

function Lyrics({ lyricsData }) {
  let initialValue = <FaRegCopy />;
  const [buttonText, setButtonText] = useState(initialValue);

  // copy lyrics button
  const handleClick = async () => {
    await navigator.clipboard.writeText(lyricsData.lyrics);
    setButtonText(<FaCheck />);
    setTimeout(() => {
      setButtonText(initialValue);
    }, 3000);
  };

  return (
    <div>
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
          </div>
        </div>
        <button
          className="h-10 w-10 p-2 text-2xl text-gray-300 transition hover:text-gray-400"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
      <p className="whitespace-pre-line">{lyricsData.lyrics}</p>
    </div>
  );
}

export default Lyrics;
