import anarchy from './assets/img/anarchy.png'
import blackLine from './assets/img/blackLine.png'

function App() {

  return (
    <>
    <div className='bg-grey3'>
      <div className="mx-auto border-x-[10px] border-grey1 max-w-[1200px]">
        <header className='h-[80vh] px-4 bg-grey3 bg-scratches flex items-center relative overflow-hidden'>
          <img className='sm:block hidden absolute top-0 right-0 w-[29rem]' src={anarchy} alt="anarchy" />

          <div className="text-white1 z-10 pl-16">
            <h1 className=" font-rubik font-bold text-8xl mb-8">Привет! <br /> Я <span className="text-red1">Макс</span>  - твой <br /> фотограф</h1>
            <span className='relative'>
              <p className=" font-truet text-4xl relative before:bg-blackLine before:absolute z-20">Творю, вопреки стандартам <br /> Безусловно, сплочённость команды</p>
              <img className='absolute top-0 left-0' src={blackLine} alt="blackLine" />
            </span>
          </div>
        </header>
      </div>
    </div>
    </>
  )
}

export default App
