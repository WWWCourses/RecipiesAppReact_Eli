import React from "react";

function CuisineFilter() {
    return (
        <div className="filters">
            <label for="cuisine"><b className="filterCuisine">Cuisine:</b> </label>
            <select name="cuisineFilter" id="cuisineFilter">
                <option value="norestrictionsCuisine">-</option>
            </select>
        </div>
    )
}

export default CuisineFilter