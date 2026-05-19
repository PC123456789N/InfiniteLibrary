import news from "./assets/journual.png"

function NewsArticle( {setShowArticle, showArticle} ) {
  return (
    <>
      <img
      src={news}
      alt="Jornal"
      onClick={() => setShowArticle(!showArticle)}
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