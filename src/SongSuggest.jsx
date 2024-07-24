import React, { useState } from "react";
import axios from "axios";
import Lyrics from "./lyrics/Lyrics";
import fetchLyrics from "./lyrics/LyricsAPI";
import SearchBar from "./SearchBar";
import { MdExplicit } from "react-icons/md";

const SongSuggest = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [lyricsData, setLyricsData] = useState({
    lyrics: "",
    title: "",
    artist: "",
    albumArt: "",
    albumName: "",
    explicit: false,
  });
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSuggestions = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?limit=5&q=${query}`,
      );
      setSuggestions(response.data.data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleSearch = (e) => {
    e.preventDefault();
    fetchSuggestions(query);
  };

  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
        handleSearch={handleSearch}
      />
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
                suggestion.explicit_lyrics,
              )
            }
            className="cursor-pointer p-3 transition hover:bg-coal-900"
          >
            {suggestion.title} - {suggestion.artist.name}
            {suggestion.explicit_lyrics && (
              <MdExplicit className="ml-1 inline text-coal-200" />
            )}
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {lyricsData.lyrics && <Lyrics lyricsData={lyricsData} />}
    </>
  );
};

export default SongSuggest;
