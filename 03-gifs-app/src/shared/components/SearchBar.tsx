import React, { useEffect, useState } from 'react'


interface Props {
    placeholder: string;
    onQuery: (query: string) => void
}



export const SearchBar = ({ placeholder, onQuery }: Props) => {

    const [query, setQuery] = useState('')
    const handleSearch = () => {
        onQuery(query)
        setQuery('')

    }

    useEffect(() => {
        const timeoutid = setTimeout(() => {
            onQuery(query)
        }, 7000)


        return () => {
            clearTimeout(timeoutid)
        }
    }, [query, onQuery])

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    }
    return (
        <div className='search-container'>

            <input type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown} />

            <button onClick={handleSearch}>Buscar</button>

        </div>
    )

}
export default SearchBar
