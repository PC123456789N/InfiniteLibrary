import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useRef,useState } from "react";

import aud1 from "./assets/pagesflip.mp3"

function SideArrow( {left, pageIndex, setPageIndex, maxPage} ){
  const audioRef = useRef(null);

  function playAudio(){
    if (audioRef.current) {

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

  function nextPage() {
    if (pageIndex < maxPage) {
      playAudio()
      setPageIndex(pageIndex + 1);
    }
  }

  function prevPage() {
    if (pageIndex > 0) {
      playAudio()
      setPageIndex(pageIndex - 1);
    }
  }

  
  return(
    <>
      <audio ref={audioRef}>
        <source src={aud1} type="audio/mpeg" />
      </audio>

      {left && pageIndex > 0 && (
        <button
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            z-[100]
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

          onClick={() => prevPage()}
        >
          <FaChevronLeft size={32} />
        </button>
      )}

      {!left && pageIndex < maxPage && (
        <button
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            z-[100]
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
          onClick={() => nextPage()}
        >
          <FaChevronRight size={32} />
        </button>
      )}
    </>
  );
} export default SideArrow