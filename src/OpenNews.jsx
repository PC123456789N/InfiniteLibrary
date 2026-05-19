import { useState } from "react";
import "./scrollbar.css";
import page1 from "./assets/page1.png";
import page2 from "./assets/page1.png"; 

function OpenNews() {
  const pages = [page1, page2];
  const [pageIndex, setPageIndex] = useState(0);

  function nextPage() {
    if (pageIndex < pages.length - 1) {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      
      {/* 2. THE WINDOW (Scroll Container): Restricts the height and scrolls */}
      <div 
        id="news-scroll" 
        className="
          lg:h-full md:w-[75%] w-full 
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

          {/* 🔺 TRIÂNGULO SUPERIOR ESQUERDO (At the absolute top of the image) */}
          <div className="absolute top-0 left-0 z-10">
            <div
              onClick={prevPage}
              className="
                w-0 h-0 cursor-pointer
                border-l-60 border-b-60
                md:border-l-100 border-r-0 md:border-b-100
                border-l-black border-b-transparent
              "
            >
            </div>
          </div>

          {/* 🔻 TRIÂNGULO INFERIOR ESQUERDO (At the absolute bottom of the image) */}
          <div className="absolute bottom-0 left-0 z-10">
            <div
              onClick={nextPage}
              className="
                w-0 h-0 cursor-pointer
                border-l-60 border-t-60
                md:border-l-100 border-r-0 md:border-t-100
                border-l-black border-t-transparent
              "
            >
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OpenNews;