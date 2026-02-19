import React, { useEffect, useState } from 'react'



interface Pokemon {
    id: number,
    name: string,
    imageUrl: string
}

interface Props {
    id: number
}

export const usePokemon = ({ id }: Props) => {

    const [pokemon, setPokemon] = useState<Pokemon | null>()
    const [isLoading, setLoading ] = useState(true)
    

    const getPokemonById = async (id: number) => {
        setLoading(true)
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        console.log(data.name)
        console.log({data})

        setPokemon({
            id: id,
            name: data.name,
            imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });
        setLoading(false)
    }

    useEffect(() => {
            getPokemonById(id)
            
        }, [id]);

    
  return {
        isLoading,
        pokemon,

        getPokemonById,

        formatteId: id.toString().padStart(3, '0')
  }
}
