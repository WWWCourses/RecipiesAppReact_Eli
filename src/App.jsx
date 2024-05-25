//import { useState } from 'react'
import TitleIndex from "./titleIndexPage/titleIndexPage";
import SearchBar from "./searchBarIndex/searchBar";
import MainImage from "./mainImageIndex/mainImage";


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
