import { useState } from "react";
import "./scrollbar.css";
import SideArrow from "./SideArrow";
import { IoMdClose } from "react-icons/io";

import page1 from "./assets/page1.png";
import page2 from "./assets/page1.png";
import page3 from "./assets/page1.png"; 
import page4 from "./assets/page1.png";
import page5 from "./assets/page1.png";   

function OpenNews( {setShowArticle}) {
  const pages = [page1, page2, page3, page4, page5];
  const [pageIndex, setPageIndex] = useState(0);

  function nextPage() {
    if (pageIndex < 5) {
      setPageIndex(pageIndex + 1);
    }
  }

  function prevPage() {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  }

  return (
    /* 1. SCREEN WRAPPER: Centers the component on the viewport */
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-auto">
      <SideArrow left={true} setPageIndex={setPageIndex} pageIndex={pageIndex}/>
      <SideArrow left={false} setPageIndex={setPageIndex} pageIndex={pageIndex}/>
      
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
          <img src={pages[pageIndex]} alt={`Page ${pageIndex + 1}`} className="w-full h-auto block" />
          <div className="absolute top-0 z-50 ">
            <button className="bg-amber-100 rounded-2xl hover:bg-black transition duration-150"
            onClick={() => setShowArticle(false)}
            >
              <IoMdClose className=" transition duration-150 size-16 md:size-10 hover:text-white"/>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OpenNews;