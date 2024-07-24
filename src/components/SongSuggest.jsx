import React from "react";
import fetchLyrics from "./lyrics/LyricsAPI";
import { MdExplicit } from "react-icons/md";

const SongSuggest = ({
  suggestions,
  setSuggestions,
  setLyricsData,
  setLoading,
  loading,
}) => {
  const handleSuggestionClick = async (
    title,
    artist,
    albumArt,
    albumName,
    explicit,
  ) => {
    setLoading(true);
    const fetchedLyrics = await fetchLyrics(title, artist);
    setLyricsData({
      ...fetchedLyrics,
      albumArt: albumArt,
      albumName: albumName,
      explicit: explicit,
    });
    setSuggestions([]); // Clear suggestions after clicking
    setLoading(false);
  };

  return (
    <ul className="my-5 rounded-lg bg-coal-950">
      {suggestions.map((suggestion) => (
        <li
          key={suggestion.id}
          onClick={() =>
            handleSuggestionClick(
              suggestion.title,
              suggestion.artist.name,
              suggestion.album.cover_medium,
              suggestion.album.title,
              suggestion.explicit_lyrics, // Pass explicit property
            )
          }
          className="cursor-pointer p-3 transition hover:bg-coal-900"
        >
          {suggestion.title} - {suggestion.artist.name}
          {suggestion.explicit_lyrics && (
            <MdExplicit className="ml-2 inline text-coal-300" />
          )}
        </li>
      ))}
      {loading && <p>Loading...</p>}
    </ul>
  );
};

export default SongSuggest;
