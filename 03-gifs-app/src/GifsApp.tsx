
import { useGifs } from './gifs/hooks/useGifs'
import GifList from './gifs/components/GifList'
import CustomHeader from './shared/components/CustomHeader'
import SearchBar from './shared/components/SearchBar'
import PreviousSearches from './gifs/components/PreviousSearches'

export const GifsApp = () => {

    const { gifs, previousTerms, handleSearch, handleTermClick } = useGifs()


    return (
        <>
            {/* Header */}
            <CustomHeader tittle='Buscador de Gifs' description='Descubre y comparte el gif perfecto' />

            {/* Search */}
            <SearchBar placeholder='Busca lo que quieras' onQuery={handleSearch} />

            {/* Busquedas previas */}
            <PreviousSearches searches={previousTerms} onLabelClick={handleTermClick} />

            {/* Gifs */}
            <GifList gifs={gifs} />
        </>
    )
}


export default GifsApp
