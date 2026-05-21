
import { IoExitOutline } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";

function SideButton( {home, setEntered, setCredits, setFade} ){

  function GoHome() {
    // escurece
    setFade(true);

    // espera a animação
    setTimeout(() => {

      // aqui você troca o frame/tela
      

      // volta ao normal
      setTimeout(() => {
        setFade(false);
      }, 100);
      setEntered(0)
    }, 1000);
  }

  function GoCredits() {
    setFade(true);

    // espera a animação
    setTimeout(() => {

      // aqui você troca o frame/tela
      

      // volta ao normal
      setTimeout(() => {
        setFade(false);
      }, 100);
      setEntered(2)
    }, 1000);
  }
  
  return(
    <>
      {home && (
        <button
        className="
        absolute
        left-4
        bottom-0
        -translate-y-1/2
        z-20
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
        
        onClick={() => GoHome()}
        >
          <IoExitOutline size={32} />
        </button>
      )}

      {!home && (
        <button
        className="
        absolute
        right-4
        bottom-0
        -translate-y-1/2
        z-20
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
        onClick={() => GoCredits()}
        >
          <IoInformationCircle size={32} />
        </button>
      )}
    </>
  );
} export default SideButton