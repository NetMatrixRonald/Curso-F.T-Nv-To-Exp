import { useState } from "react";
import useCounter from "./hooks/useCounter";
import { usePokemon } from "./hooks/usePokemon";

export const PokemonPage = () => {



    const { count, handleDecrement, handleIncrement } = useCounter(150)
    const { pokemon, isLoading, formatteId } = usePokemon({ id: count })

    if (isLoading) {
        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">#{count} {pokemon?.name} Cargando....</h3>
            </div>
            )     
        }
    

        return (
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokémon</h1>
                <h3 className="text-xl font-bold text-white">#{formatteId} {pokemon?.name}</h3>

                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count}.png`}
                    alt={pokemon?.name}
                />

                <div className="flex gap-2">

                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleDecrement}>
                        Anterior
                    </button>

                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleIncrement}>
                        Siguiente
                    </button>

                </div>
            </div>
        );
    

};