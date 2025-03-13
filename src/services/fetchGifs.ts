import { ListOfGifs } from "../types.d"
import { API_KEY } from '../consts'

export const fetchGifs = async ({ pageParam = 0 }: { pageParam?: number }) => {
    return await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=30&offset=${pageParam}`)
        .then(async res => {
            if (!res.ok) throw new Error('Error en la petición')
            return await res.json()
        })
        .then(res => {
            return {
                newGifs: res.data.map((gif: { id: string, images: { original: { url: string } }, title: string }) => ({
                    id: gif.id,
                    url: gif.images.original.url,
                    title: gif.title
                })) as ListOfGifs,
                nextOffset: res.pagination.offset + 30
            }
        })
}
