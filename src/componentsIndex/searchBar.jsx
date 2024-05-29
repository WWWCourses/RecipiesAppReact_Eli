import React from "react";

function SearchBar() {
    return (
        <div className="searchRecipieCuisineOrIngredient">
            <input type="text" id="recipieInput" placeholder="Type cuisine, ingredient or recipie name..." />
            <button id="find_button">Find</button>
        </div>
    )
}

export default SearchBar