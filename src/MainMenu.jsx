import { useState, useRef, useContext, useEffect } from "react";
import MenuBg from "./assets/mainmenu.png"
import aud3 from "./assets/opendoor.mp3"

function MainMenu( {setEntered} ) {
  const [fade, setFade] = useState(false);
  const audioRef = useRef(null)

  function playAudio(){
      if (audioRef.current) {
  
        audioRef.current.volume = 0.25;
        audioRef.current.src = aud3;
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

  function changeScenery() {
    // escurece
    playAudio()
    setFade(true);
    // espera a animação
    setTimeout(() => {

      // aqui você troca o frame/tela
      
      // volta ao normal
      setTimeout(() => {
        setFade(false);
      }, 100);
      setEntered(1)
    }, 1200);
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <audio
        ref={audioRef}
      />

      <img src={MenuBg} alt="" className="absolute inset-0 w-full h-full object-cover md:object-fill"/>

      <div className="bg-black fixed top-3/10 left-1/2 -translate-x-1/2 -translate-y-1/2
      rounded-2xl
      px-4 py-3 w-[75%]
      border-2 border-white
      flex items-center justify-center
      md:hidden
      ">
        <h1 className="
        text-white text-center 
        font-semibold
        text-4xl">
          Biblioteca Infinita
        </h1>
      </div>

      <button className="fixed inset-0  
      top-1/2 md:top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-gray-700/25 w-60 h-25 md:w-40 md:h-15
      rounded-xl
      border border-gray-100 
      cursor-pointer
      flex items-center justify-center
      hover:bg-gray-600/50 hover:scale-105
      "
      onClick={() => changeScenery()}
      >
        <p className="font-semibold text-white text-xl md:text-2xl">
          Acessar
        </p>
      </button>

      {/* Overlay / Screen Cover */}
      <div
        className={`
          absolute inset-0 bg-black
          transition-opacity duration-1000
          ${fade ? "opacity-100 z-50 pointer-events-auto" : "opacity-0 z-30 pointer-events-none"}
        `}
      />
    </div>     
  );
} export default MainMenu