import { useState } from 'react'

import bg from "./assets/bgvideo.mp4"
import bgSit from "./assets/bgvideosit.mp4"
import news from "./assets/journual.png"

import NewsArticle from './NewsArticle';
import SideArrow from './SideArrow';
import OpenNews from './OpenNews';




function App() {
  const [fade, setFade] = useState(false);
  const [sit, setSit] = useState(false);
  const [showArticle, setShowArticle] = useState(false);

  function changeFrame() {
    // escurece
    setShowArticle(false)
    setFade(true);

    // espera a animação
    setTimeout(() => {

      // aqui você troca o frame/tela
      setSit(!sit)

      // volta ao normal
      setTimeout(() => {
        setFade(false);
      }, 100);

    }, 1000);
  }

  return (
     <div className="relative w-screen h-screen overflow-hidden">
      
      {/* Background render */}
      <video
        key={sit ? "sit" : "normal"}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={sit ? bgSit : bg} type="video/mp4" />
      </video>

      {/* LUZ DA LANTERNA */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          z-10
        "
        style={{
          background: `
            radial-gradient(
              circle at 78% 28%,
              rgba(255,220,150,0.45) 0%,
              rgba(255,200,120,0.18) 18%,
              rgba(0,0,0,0) 40%
            )
          `,
          mixBlendMode: "screen",
        }}
      />
      

      {/* Overlay / Screen Cover */}
      <div
        className={`
          absolute inset-0 bg-black
          transition-opacity duration-1000
          ${fade ? "opacity-100 z-50 pointer-events-auto" : "opacity-0 z-30 pointer-events-none"}
        `}
      />

      <button
        onClick={changeFrame}
        className="
          fixed w-100 z-20
          -bottom-7 left-1/2
          -translate-x-1/2 -translate-y-1/2
          bg-gray-600/50 text-gray-100 font-semibold 
          px-10 py-3 rounded-t-xl
          hover:border-white
          border border-black
          hover:bg-gray-500/50
          hover:scale-105
          cursor-pointer
        "
      >
        {showArticle ? `Fechar o Jornal`: `Ver o Jornal`}
      </button>

      {/* Optional Content */}
      {showArticle && (
        <OpenNews setShowArticle={setShowArticle}/>
      )}


      {sit && <NewsArticle setShowArticle={setShowArticle} showArticle={showArticle}/>}

    </div>
  );
}

export default App
