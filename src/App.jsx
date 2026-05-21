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
  const [entered, setEntered] = useState(false)
  return (
    <>
      {entered ? <MainPage setEntered={setEntered} /> : <MainMenu setEntered={setEntered} />}
    </>
  );
}

export default App
