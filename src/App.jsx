import { useState } from 'react'

import bg from "./assets/bgvideo.mp4"
import bgSit from "./assets/bgvideosit.mp4"
import news from "./assets/journual.png"

import NewsArticle from './NewsArticle';
import SideArrow from './SideArrow';
import OpenNews from './OpenNews';
import MainMenu from './MainMenu';
import MainPage from './MainPage';




function App() {
  const [entered, setEntered] = useState(0)
  return (
    <>
      {entered == 0 && <MainMenu setEntered={setEntered} /> }
      {entered == 1 && <MainPage setEntered={setEntered} /> }
      {entered == 2 && <MainPage setEntered={setEntered} /> }
    </>
  );
}

export default App
