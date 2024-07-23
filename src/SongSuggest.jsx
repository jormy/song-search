import React, { useState } from "react";
import axios from "axios";
import Lyrics from "./lyrics/Lyrics";
import fetchLyrics from "./lyrics/LyricsAPI";
import { FaSearch } from "react-icons/fa";

const SongSuggest = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [lyricsData, setLyricsData] = useState({
    lyrics: "",
    title: "",
    artist: "",
    albumArt: "",
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

  const handleSuggestionClick = async (title, artist, albumArt) => {
    setLoading(true);
    const fetchedLyrics = await fetchLyrics(title, artist);
    setLyricsData({
      ...fetchedLyrics,
      albumArt: albumArt, // Set the album art here
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
      <div className="mt-5 text-center">
        <form onSubmit={handleSearch} className="flex justify-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter the song name / artist"
            className="h-12 w-96 rounded-lg border-2 border-gray-300 p-3"
          />
          <button
            type="submit"
            className="flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-500 p-1 text-white transition hover:bg-blue-600"
          >
            <FaSearch />
          </button>
        </form>
      </div>
      <ul className="my-5 rounded-lg border-2 border-gray-300 bg-gray-100">
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.id}
            onClick={() =>
              handleSuggestionClick(
                suggestion.title,
                suggestion.artist.name,
                suggestion.album.cover_medium,
              )
            }
            className="cursor-pointer p-3 hover:bg-gray-200"
          >
            {suggestion.title} - {suggestion.artist.name}
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {lyricsData.lyrics && <Lyrics lyricsData={lyricsData} />}
    </>
  );
};

export default SongSuggest;
