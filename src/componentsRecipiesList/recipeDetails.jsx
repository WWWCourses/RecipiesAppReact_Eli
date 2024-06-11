import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavButton from "./navButton";
import './recipeDetails.css';

function RecipeDetails() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMeal(data.meals[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="recipeDetailsPage">
      <NavButton label="Back to Recipes" />
      <div className="recipeDetails">
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="mealImage" />
        <h2>Ingredients</h2>
        <ul>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) =>
            meal[`strIngredient${i}`] ? (
              <li key={i}>
                {meal[`strIngredient${i}`]} - {meal[`strMeasure${i}`]}
              </li>
            ) : null
          )}
        </ul>
        <h2>Instructions</h2>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
