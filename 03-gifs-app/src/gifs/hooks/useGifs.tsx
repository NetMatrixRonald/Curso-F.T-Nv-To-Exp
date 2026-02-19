import { useRef, useState } from "react"
import type { Gif } from "../interfaces/giphy.interface"
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions"


// const gifCache: Record<string, Gif[]> = {}

export const useGifs = () => {

    const [gifs, setGifs] = useState<Gif[]>([])
    const [previousTerms, setPreviousTerms] = useState<string[]>([])

    const gifCache = useRef<Record<string, Gif[]>>({})

    const handleTermClick = async (termSearch: string) => {
        if (gifCache.current[termSearch]) {
            setGifs(gifCache.current[termSearch]);
            return;
        }

        const gifs = await getGifsByQuery(termSearch)
        setGifs(gifs)

        
        gifCache.current[termSearch] = gifs

    }

    const handleSearch = async (query: string) => {
        const querymTrim = query.trim().toLowerCase()
        if (querymTrim === '') {
            return;
        }
        if (previousTerms.includes(querymTrim)) {

        } setPreviousTerms([querymTrim, ...previousTerms].splice(0, 8))
        // if(previousTerms.length < 8) {
        //  setPreviousTerms([...previousTerms, querymTrim])
        //  return;
        // }
        const gifs = await getGifsByQuery(querymTrim)
        setGifs(gifs)

        gifCache.current[querymTrim] = gifs

    }
    return {
        // Values
        gifs,
        previousTerms,
        // Methods - Actions
        handleSearch,
        handleTermClick

    }

}

export default useGifs
