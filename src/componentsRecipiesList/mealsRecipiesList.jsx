import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "../context/RecipesContext";
import NavButton from "./navButton";
import './mealsRecipiesList.css';

function MealsRecipiesList() {
  const { meals, loading, error } = useRecipes();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mealsPage">
      <NavButton to="/" label="Back to Home" />
      <div className="listOfMeals">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="mealItem">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="mealThumb"
              onClick={() => navigate(`/recipe/${meal.idMeal}`)}
              title="View full recipie"
            />
            <h3>{meal.strMeal}</h3>
            <p>{meal.strInstructions.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealsRecipiesList;
