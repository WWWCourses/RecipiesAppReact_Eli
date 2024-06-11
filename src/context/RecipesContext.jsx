import React, { createContext, useState, useContext, useEffect } from "react";

const RecipesContext = createContext();

const RecipesProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMeals(data.meals);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <RecipesContext.Provider value={{ meals, loading, error }}>
      {children}
    </RecipesContext.Provider>
  );
};

const useRecipes = () => useContext(RecipesContext);

export {RecipesProvider, useRecipes}

