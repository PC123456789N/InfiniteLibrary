import { useState } from 'react'
import { useRef } from "react";

import bg from "./assets/bgvideo.mp4"
import bgSit from "./assets/bgvideosit.mp4"
import news from "./assets/journual.png"

import aud1 from "./assets/pagesflip.mp3"
import aud2 from "./assets/steps.mp3"
import aud3 from "./assets/opendoor.mp3"

import NewsArticle from './NewsArticle';
import SideArrow from './SideArrow';
import SideButton from './SideButton';
import OpenNews from './OpenNews';


function MainPage( {setEntered} ) {
  const [fade, setFade] = useState(false);
  const [sit, setSit] = useState(false);
  const [showArticle, setShowArticle] = useState(false);
  const audioRef = useRef(null);

  function changeFrame(goSit) {
    // escurece
    if(!goSit){
      playAudio(3)
    } else{
      playAudio(2)
    }
    
    playAudio(2)
    setShowArticle(false)
    setFade(true);

    // espera a animação
    setTimeout(() => {

      // aqui você troca o frame/tela
      if(goSit){setSit(!sit);}

      // volta ao normal
      setTimeout(() => {
        if(!goSit){setEntered(0);}
        setFade(false);
      }, 100);

    }, 1000);
  };

  function playAudio(audioCode){
    if (audioRef.current) {
      switch (audioCode) {
        case 1:
          audioRef.current.src = aud1;
          break
        case 2:
          audioRef.current.src = aud2;
          break
        case 3:
          audioRef.current.src = aud3;
          console.log("case3")
          break
      }

      audioRef.current.volume = 0.5;
      audioRef.current.currentTime = 0;

      audioRef.current.play()
        .then(() => {
          console.log("Áudio tocando");
        })
        .catch((err) => {
          console.log("Erro ao tocar áudio:", err);
        });
    }
  };

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
        {sit ? `Voltar`: `Ver o Jornal`}
      </button>

      {/* Optional Content */}
      {showArticle && (
        <OpenNews setShowArticle={setShowArticle}/>
      )}

      <audio ref={audioRef} />



      {sit && <NewsArticle setShowArticle={setShowArticle} showArticle={showArticle}/>}

      {!sit && <SideButton home={true} setEntered={setEntered} setCredits={true} setFade={setFade}/>}
      {!sit && <SideButton home={false} setEntered={setEntered} setCredits={true} setFade={setFade}/>}
      

    </div>
  );
} export default MainPage