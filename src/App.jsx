//import { useState } from 'react'
import TitleIndex from "./componentsIndex/title";
import SearchBar from "./componentsIndex/searchBar";
import MainImage from "./componentsIndex/mainImage";
import { Router, Route, Routes } from "react-router";
import MealsRecipiesList from "./componentsRecipiesList/mealsRecipiesList";

function App() {

  return (
    <div className='mainPage'>
      <TitleIndex />
      <SearchBar />
      <MainImage />
    </div>
  )
}

export default App
