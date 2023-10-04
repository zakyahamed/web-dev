import React, { useState } from "react";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("food"); // Default to 'food'

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query, searchType); // Pass both query and searchType to the callback
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder={`Search for ${
          searchType === "food" ? "food" : "locations"
        }...`}
        value={query}
        onChange={handleInputChange}
      />
      <select
        className="search-type"
        onChange={handleSelectChange}
        value={searchType}
      >
        <option value="food">Search for Food</option>
        <option value="location">Search for Locations</option>
      </select>
      <button className="btn" type="submit">
        {`search ${searchType === "food" ? "food" : "location"}`}
      </button>
    </form>
  );
}

export default SearchForm;
