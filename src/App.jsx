import { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import bg from "./assets/bgvideo.mp4"
import bgSit from "./assets/bgvideosit.mp4"
import news from "./assets/journual.png"




function App() {
  const [fade, setFade] = useState(false);
  const [sit, setSit] = useState(false);
  const [showJournal, setShowJournal] = useState(false);

  function changeFrame() {
    // escurece
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

      {/* Left Arrow */}
      <button
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          z-30
          bg-white/10
          hover:bg-white/20
          border
          border-white/20
          rounded-full
          p-3
          text-white
          transition
          cursor-pointer
        "
      >
        <FaChevronLeft size={32} />
      </button>

      {/* Right Arrow */}
      <button
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          z-30
          bg-white/10
          hover:bg-white/20
          border
          border-white/20
          rounded-full
          p-3
          text-white
          transition
          cursor-pointer
        "
      >
        <FaChevronRight size={32} />
      </button>

      <button
        onClick={changeFrame}
        className="
          fixed z-30
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
        Ver o Jornal
      </button>

      {/* Optional Content */}
      {!sit && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <h1 className="text-white text-4xl font-bold tracking-wide">
            Infinite Library
          </h1>
        </div>
      )}

      {sit && (
        <img
        src={news}
        alt="Jornal"
        onClick={() => alert("Abrir jornal")}
        className="
          fixed
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-130
          -rotate-2

          hover:scale-105

          transition-all
          duration-300

          cursor-pointer
          z-20
        "/>
      )}

    </div>
  );
}

export default App
