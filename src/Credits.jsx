import credits from "./assets/credits.png"
import title from "./assets/title.png"

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

        <img src={title} alt="" className="
        top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        absolute inset-0
        opacity-100
        "/>
      </div>
      <button className="bottom-0 left-1/2
          -translate-x-1/2 -translate-y-1/2
          absolute
          
        "
        onClick={() => setEntered(0)}
        >
        <p className="text-white/50 transition font-semibold text-3xl hover:text-red-900">Sair</p>
      </button>
      <h4 className="text-2xl sm:hidden text-white absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        Kaio H. Lopes <br />
        Talita K. Guedes <br />
        Jade Raquel <br />
        Guilherme A. <br />
      </h4>
    </>
  )
} export default Credits