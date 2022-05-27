import Amount from "../component/Amount";
import Drops from "../component/Drops";
import Cosmetic from "../component/cosmetic/Cosmetic";
import MainNavbar from "../component/navbar/MainNavbar";


export default function Home() {
  return (
    <div >

      <main className="w-full sm:mt-20 mt-0">
        <section className="h-screen bg-no-repeat bg-cover bg-home text-white">
        
          <div className="w-full m-auto flex-wrap ">
            <div className="h-12"></div>
            {/* BANNER */}
            <div className="w-5/6 hidden sm:block flex flex-col m-auto items-center justify-center h-banner bg-grey mt-10 ">
              Banner Interactivo Intro
            </div>

            {/* GOTAS */}
            <div className="">
              <Drops />
            </div>

            {/* DISCOUNT */}
            <div>
              <Amount />
            </div>
            {/* COSMETIC*/}
            <div>
              <Cosmetic />
            </div>
            <div className="h-20">

            </div>
          </div>

        </section>


      </main>

    </div>
  )
}
