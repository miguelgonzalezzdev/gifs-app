import { useEffect, useState } from 'react'
import ReactIcon from './icons/ReactIcon'
import TypescriptIcon from './icons/TypescriptIcon'
import TailwindcssIcon from './icons/TailwindcssIcon'
import ReactqueryIcon from './icons/Reactquery'
import { Gifs } from './components/Gifs'
import { API_KEY } from './consts'

function App() {
  const [gifs, setGifs] = useState()

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=30`)
      .then(res => res.json())
      .then(json => { 
        if (json && Array.isArray(json.data)) {
          const newGifs = json.data.map(gif => ({
            id: gif.id,
            url: gif.images.original.url,
            title: gif.title,
            images: gif.images 
          }))
          setGifs(newGifs);
        }
      })
      .catch(error => console.error('Error:', error));
  }, [])

  return (
    <div className="flex flex-col items-center justify-start min-h-screen w-full bg-stone-900 bg-[linear-gradient(to_right,#2d2d2d,transparent_1px),linear-gradient(to_bottom,#2d2d2d,transparent_1px)] bg-[size:6rem_4rem]">
      <header className='flex flex-col items-center justify-start'>
        <h1 className='m-10 text-white text-6xl font-bold'>Infinity GIFs App</h1>
      </header>
      <main className='p-4 mb-20'>
        {gifs && <Gifs gifs={gifs} />}
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
