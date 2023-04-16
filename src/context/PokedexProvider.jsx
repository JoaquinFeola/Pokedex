import React, { useEffect, useState } from 'react'
import { PokedexContext } from './PokedexContext'
import { getPokemonsFromApi } from '../pokedex/helpers/getPokemonsFromApi';

export const PokedexProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const pokemonsGetted = async() => {
    setIsLoading(true);
    const data = await getPokemonsFromApi(1008);
    setIsLoading(false)
    setPokemons([...data]);
  };
  
  useEffect(() => {
    pokemonsGetted();
  }, []);

  return (
    <PokedexContext.Provider value={{ pokemons, isLoading }}>
        { children }
    </PokedexContext.Provider>
  )
}
