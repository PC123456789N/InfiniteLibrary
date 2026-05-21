import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function SideArrow( {left, pageIndex, setPageIndex} ){

  function nextPage() {
    if (pageIndex < 3) {
      setPageIndex(pageIndex + 1);
    }
  }

  function prevPage() {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  }
  
  return(
    <>
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

      {!left && pageIndex < 3 && (
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