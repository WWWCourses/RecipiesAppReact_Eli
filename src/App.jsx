import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TitleIndex from "./componentsIndex/title";
import SearchBar from "./componentsIndex/searchBar";
import MainImage from "./componentsIndex/mainImage";
import MealsRecipiesList from "./componentsRecipiesList/mealsRecipiesList";
import RecipeDetails from "./componentsRecipiesList/recipeDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="mainPage">
              <TitleIndex />
              <SearchBar />
              <MainImage />
            </div>
          }
        />
        <Route path="/recipes" element={<MealsRecipiesList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
