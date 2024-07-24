import React, { useState } from "react";
import axios from "axios";
import SongSuggest from "./SongSuggest";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setLyricsData }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchSuggestions(query);
  };

  const fetchSuggestions = async (query) => {
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

  return (
    <>
      <form onSubmit={handleSearch} className="flex gap-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a song..."
          className="h-12 flex-grow rounded-lg bg-coal-950 p-3"
        />
        <button
          type="submit"
          className="ml-2 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 p-2 text-xl text-white transition hover:bg-blue-600"
        >
          <FaSearch />
        </button>
      </form>
      <SongSuggest
        suggestions={suggestions}
        setSuggestions={setSuggestions}
        setLyricsData={setLyricsData}
        setLoading={setLoading} // Pass setLoading as a prop
        loading={loading}
      />
    </>
  );
};

export default SearchBar;
