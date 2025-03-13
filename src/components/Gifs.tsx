import { ListOfGifs } from "../types.d"

export const Gifs = ({ gifs }: {gifs: ListOfGifs}) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-start gap-0 p-0">
            {Array.isArray(gifs) && gifs.map(gif => (
                <div key={gif.id} className="m-0 p-0 w-100 h-60">
                    <img src={gif.url} alt={gif.title} className="w-full h-full object-cover"/>
                </div>
            ))}
        </div>
    )
}
