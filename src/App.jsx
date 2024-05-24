//import { useState } from 'react'
import SearchBar from "./searchBarIndex/searchBar";
import MainImage from "./mainImageIndex/mainImage";


function App() {

  return (
    <div className='mainPage'>
      <h1><span className="linesH1">~</span> Find your favorite recipies <span className="linesH1">~</span></h1>
      <SearchBar />
      <MainImage />
    </div>
  )
}

export default App
