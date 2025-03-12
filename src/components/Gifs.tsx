
export const Gifs = ({ gifs }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-start gap-0 p-0">
            {gifs.map(gif => (
                <div key={gif.id} className="m-0 p-0">
                    <img src={gif.url} alt={gif.title} className="w-full h-48 object-cover"/>
                </div>
            ))}
        </div>
    )
}