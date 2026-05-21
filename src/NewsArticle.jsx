import { useRef } from "react";
import news from "./assets/journual.png"

import aud1 from "./assets/pagesflip.mp3"

function NewsArticle( {setShowArticle, showArticle} ) {
  const audioRef = useRef(null)
  
  function playAudio(){
    if (audioRef.current) {

      audioRef.current.volume = 0.5;
      audioRef.current.currentTime = 0;
      audioRef.current.src = aud1;

      audioRef.current.play()
        .then(() => {
          console.log("Áudio tocando");
        })
        .catch((err) => {
          console.log("Erro ao tocar áudio:", err);
        });
    }
  };

  function OpenJournal(){
    playAudio()
    setShowArticle(!showArticle)
  }
  
  return (
    <>
      <audio ref={audioRef} />
      <img
      src={news}
      alt="Jornal"
      onClick={() => OpenJournal()}
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
        z-20"
      />
    </>      
  );
} export default NewsArticle