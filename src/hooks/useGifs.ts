import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchGifs } from '../services/fetchGifs'
import { ListOfGifs } from '../types.d'

export const useGifs = () => {
    const { isLoading, isError, data, fetchNextPage, hasNextPage } = useInfiniteQuery<{ newGifs: ListOfGifs, nextOffset: number }>({
        queryKey: ['gifs'],
        queryFn: ({ pageParam = 0 }: { pageParam?: number }) => fetchGifs({ pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => lastPage.nextOffset,
        refetchOnWindowFocus: false
    })

    return {
        isLoading,
        isError,
        gifs: data?.pages?.flatMap(page => page.newGifs) ?? [],
        fetchNextPage,
        hasNextPage
    }
}
