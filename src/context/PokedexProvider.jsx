import React, { useEffect, useState } from 'react'
import { PokedexContext } from './PokedexContext'
import { getPokemonsFromApi } from '../pokedex/helpers/getPokemonsFromApi';

export const PokedexProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const pokemonsGetted = async(number, setPokemons) => {
    setIsLoading(true);
    const data = await getPokemonsFromApi(number);
    setIsLoading(false)
    return setPokemons([...data]);
  };
  
  useEffect(() => {
    pokemonsGetted(20, setPokemons) ;
  }, []);

  return (
    <PokedexContext.Provider value={{ pokemons, setPokemons, isLoading, pokemonsGetted }}>
        { children }
    </PokedexContext.Provider>
  )
}
