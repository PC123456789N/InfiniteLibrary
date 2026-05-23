import { useRef } from "react";
import news1 from "./assets/journual1.png"
import news2 from "./assets/journual2.png"

import aud1 from "./assets/pagesflip.mp3"

function NewsArticle( {setShowArticle, showArticle, setType} ) {
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

  function OpenJournal(type){
    playAudio()
    setShowArticle(!showArticle)
    setType(type)
    console.log(type)
  }
  
  return (
    <>
      <audio ref={audioRef} />
      <img
      src={news2}
      alt="Jornal"
      onClick={() => OpenJournal(1)}
      className="
        fixed
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-130
        -rotate-6

        brightness-125
    
        hover:-rotate-10
        hover:scale-105
    
        transition-all
        duration-300
        grayscale
        cursor-pointer
        z-20 hover:z-30"
      />

      <img
      src={news1}
      alt="Jornal"
      onClick={() => OpenJournal(2)}
      className="
        fixed
        top-1/2 lg:left-55/100 left-3/4
        -translate-x-1/2 -translate-y-1/2
        w-130
        -rotate-2
    
        hover:scale-105
        hover:-rotate-10
    
        transition-all
        duration-300

        cursor-pointer
        z-20 hover:z-30"
      />
    </>      
  );
} export default NewsArticle