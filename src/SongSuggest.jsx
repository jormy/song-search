import React, { useState } from "react";
import axios from "axios";
import Lyrics from "./lyrics/Lyrics";
import fetchLyrics from "./lyrics/LyricsAPI";

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
        `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?limit=5&q=${query}`
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
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter the song name"
          className="border border-gray-400 p-1 rounded-l-lg"
        />
        <button
          type="submit"
          className="bg-blue-500 border border-blue-700 p-1 rounded-r-lg text-white"
        >
          Search
        </button>
      </form>
      {loading && <p>Loading...</p>}
      <ul>
        {suggestions.map((suggestion) => (
          <li
            key={suggestion.id}
            onClick={() =>
              handleSuggestionClick(
                suggestion.title,
                suggestion.artist.name,
                suggestion.album.cover_medium
              )
            }
            className="cursor-pointer"
          >
            {suggestion.title} - {suggestion.artist.name}
          </li>
        ))}
      </ul>
      {lyricsData.lyrics && <Lyrics lyricsData={lyricsData} />}
    </div>
  );
};

export default SongSuggest;
