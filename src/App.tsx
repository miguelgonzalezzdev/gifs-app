import ReactIcon from './icons/ReactIcon'
import TypescriptIcon from './icons/TypescriptIcon'
import TailwindcssIcon from './icons/TailwindcssIcon'
import ReactqueryIcon from './icons/Reactquery'
import { Gifs } from './components/Gifs'
import { useGifs } from './hooks/useGifs'

function App() {
  
  const { isLoading, isError, gifs, fetchNextPage, hasNextPage } = useGifs()

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-stone-900 bg-[linear-gradient(to_right,#2d2d2d,transparent_1px),linear-gradient(to_bottom,#2d2d2d,transparent_1px)] bg-[size:6rem_4rem]">
      <header className='flex flex-col items-center justify-start'>
        <h1 className='m-10 text-white text-6xl font-bold'>Infinity GIFs App</h1>
      </header>
      <main className='p-4 mb-24 flex flex-col items-center justify-start gap-20'>
        {gifs && <Gifs gifs={gifs} />}

        {isLoading && !isError && <p className='text-white'>Cargando...</p>}

        {!isLoading && isError && <p className='text-white'>Error al cargar los GIFs</p>}

        {!isLoading && !isError && hasNextPage &&
          <button onClick={() => { fetchNextPage() }} className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Ver más</button>
        }
      </main>
      <footer className="flex items-center justify-center gap-4 fixed bottom-0 left-0 right-0 bg-[#2d2d2d] text-white p-4 text-center">
        <p>Developed with:</p>
        <ReactIcon />
        <TypescriptIcon />
        <ReactqueryIcon />
        <TailwindcssIcon />
      </footer>
    </div>
  )
}

export default App
