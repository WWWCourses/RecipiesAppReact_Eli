import React, { useState } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Search for:", query);
    // Implement the search functionality here
  };

  return (
    <div className="searchRecipieCuisineOrIngredient">
      <label htmlFor="recipieInput" className="visually-hidden">Search Recipes</label>
      <input
        type="text"
        id="recipieInput"
        placeholder="Type cuisine, ingredient or recipe name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button id="find_button" onClick={handleSearch}>Find</button>
    </div>
  );
}

export default SearchBar;
