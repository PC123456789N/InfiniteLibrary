import { useState } from "react";
import "./scrollbar.css";
import SideArrow from "./SideArrow";
import { IoMdClose } from "react-icons/io";

import page1 from "./assets/page1.png";
import page2 from "./assets/page2.png";
import page3 from "./assets/page3.png"; 
import page4 from "./assets/page4.png";
import page5 from "./assets/page5.png"; 
import page6 from "./assets/page6.png";

import apage1 from "./assets/1.png";
import apage2 from "./assets/2.png";
import apage3 from "./assets/3.png"; 
import apage4 from "./assets/4.png";
import apage5 from "./assets/5.png"; 
import apage6 from "./assets/6.png";     

function OpenNews( {setShowArticle, type}) {
  const pages = [page1, page2, page3, page4, page5, page6];
  const apages = [apage1, apage2, apage3, apage4, apage5, apage6];
  const [fade, setFade] = useState(false)
  const [pageIndex, setPageIndex] = useState(0);

  function changePage(newIndex) {

  setFade(true);

  setPageIndex(newIndex);

  setTimeout(() => {
    setFade(false);
  }, 300);
}

  return (
    /* 1. SCREEN WRAPPER: Centers the component on the viewport */
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
      <SideArrow left={true} setPageIndex={changePage} pageIndex={pageIndex}/>
      <SideArrow left={false} setPageIndex={changePage} pageIndex={pageIndex}/>
      
      {/* 2. THE WINDOW (Scroll Container): Restricts the height and scrolls */}
      <div 
        id="news-scroll" 
        className="
          lg:h-full lg:w-[75%] md:w-[90%] w-full 
          bg-gray-950 
          overflow-y-scroll 
          scrollbar 
          scrollbar-gutter-stable
          pointer-events-auto
        "
      >
        {/* 3. THE CONTENT WRAPPER: This relative container grows to match the image height */}
        <div className="relative w-full">
          {/* The dynamic image determining the true height */}
          <img
            src={type < 2 ? apages[pageIndex] : pages[pageIndex]}
            
            className={`
              w-full h-auto block
              transition-all duration-300
              ${fade ? "rotate-y-90 opacity-0" : "rotate-y-0 opacity-100"}
            `}
          />
          <div className="absolute top-0 z-50 ">
            <button className="bg-amber-100 rounded-2xl hover:bg-black transition duration-200"
            onClick={() => setShowArticle(false)}
            >
              <IoMdClose className=" transition duration-150 size-8 md:size-10 hover:text-white"/>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OpenNews;