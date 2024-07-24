import { useState } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";
import { MdExplicit } from "react-icons/md";

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
    <div className="rounded-lg bg-coal-950 p-5">
      <div className="flex justify-between">
        <div className="mb-5 flex gap-3">
          <img
            className="h-24 w-24 rounded-lg"
            src={lyricsData.albumArt}
            alt="Album art"
          />
          <div>
            <h2 className="max-w-72 font-bold">
              {lyricsData.title}{" "}
              {lyricsData.explicit && (
                <MdExplicit className="ml-1 inline text-coal-300" />
              )}
            </h2>
            <h3>{lyricsData.artist}</h3>
            <h4 className="font-light text-coal-50">{lyricsData.albumName}</h4>
          </div>
        </div>
        <button
          className="ml-2 h-10 w-10 p-2 text-2xl text-coal-500 transition hover:text-coal-300"
          onClick={handleClick}
        >
          {buttonText}
        </button>
      </div>
      <p className="whitespace-pre-line text-coal-50">{lyricsData.lyrics}</p>
    </div>
  );
}

export default Lyrics;
