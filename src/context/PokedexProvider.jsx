import React, { useEffect, useState } from 'react'
import { PokedexContext } from './PokedexContext'
import { getPokemonsFromApi } from '../pokedex/helpers/getPokemonsFromApi';

export const PokedexProvider = ({ children }) => {
  const [maxPokemons, setMaxPokemons] = useState(20);
  const [pokemons, setPokemons] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const pokemonsGetted = async() => {
    setIsLoading(true);
    const data = await getPokemonsFromApi(maxPokemons);
    setIsLoading(false)
    setPokemons([...data]);
  };
  
  useEffect(() => {
    pokemonsGetted();
  }, [maxPokemons]);

  return (
    <PokedexContext.Provider value={{ pokemons, maxPokemons, setMaxPokemons, isLoading }}>
        { children }
    </PokedexContext.Provider>
  )
}
