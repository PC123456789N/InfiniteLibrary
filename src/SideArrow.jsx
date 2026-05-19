import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function SideArrow( {left} ){
  return(
    <>
      {left && (
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
      )}

      {!left && (
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
      )}
    </>
  );
} export default SideArrow