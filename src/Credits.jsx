import credits from "./assets/credits.png"

function Credits( {setEntered} ) {
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden">
        <img
        src={credits}
        alt="Jornal"
        className="
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          absolute inset-0 w-full h-full object-cover md:object-fill
        "/>
      </div>
      <button className="bottom-0 left-1/2
          -translate-x-1/2 -translate-y-1/2
          absolute
          
        "
        onClick={() => setEntered(0)}
        >
        <p className="text-white/50 transition font-semibold text-3xl hover:text-red-600">Sair</p>
      </button>
    </>
  )
} export default Credits