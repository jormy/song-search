import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
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
  );
};

export default SearchBar;
