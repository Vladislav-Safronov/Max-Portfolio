import anarchy from './assets/img/header/anarchy.png'
import blackLine from './assets/img/header/blackLine.png'
import cat from './assets/img/section3/cat.png'
import aboutMe from './assets/img/section3/aboutMe.png'
import catAndAboutMe from './assets/img/section3/catAndAboutMe.png'

function App() {

  return (
    <>
    {/* ears */}
    <div className='bg-grey3'>

      {/* container */}
      <div className="mx-auto border-x-[10px] border-grey1 max-w-[1200px]">
        
        {/* header */}
        <header className='h-[80vh]  bg-grey3 bg-scratches bg-cover flex items-center relative overflow-hidden'>
          <img className='sm:block hidden absolute top-0 right-0 w-[29rem]' src={anarchy} alt="anarchy" />

          <div className="text-white1 z-10 pl-16 pr-4">
            <h1 className=" font-rubik font-bold text-8xl mb-8">Привет! <br /> Я <span className="text-red1">Макс</span>  - твой <br /> фотограф</h1>
            <span className='relative'>
              <p className=" font-truet text-4xl relative before:bg-blackLine before:absolute z-20">Творю, вопреки стандартам <br /> Безусловно, сплочённость команды</p>
              <img className='absolute -top-3 -left-8' src={blackLine} alt="blackLine" />
            </span>
          </div>
        </header>

        <main>
          {/* 4 section */}
          <div className=" h-[500px] bg-orange-200">
          </div>

          {/* 3 section */}
          <div className=" px-8 bg-carbon bg-cover ">
              <div className='max-[1200px]:justify-center max-[1200px]:flex  relative '>
                <img className=' max-[1200px]:hidden' src={cat} alt="cat" />
                <img className='max-[1200px]:hidden  absolute -right-3 -top-20' src={aboutMe} alt="aboutMe" />

                <img className='max-[1200px]:block pt-6 hidden' src={catAndAboutMe} alt="catAndAboutMe" />
              </div>
          </div>

          {/* 4 section */}
          <div className=" h-[500px] bg-orange-200">
          </div>
        </main>

      </div>

    </div>
    </>
  )
}

export default App
