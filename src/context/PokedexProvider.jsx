import React, { useEffect, useState } from 'react'
import { PokedexContext } from './PokedexContext'
import { getPokemonsFromApi } from '../pokedex/helpers/getPokemonsFromApi';

export const PokedexProvider = ({ children }) => {

  const [pokemons, setPokemons] = useState();
  const pokemonsGetted = async() => {
    const data = await getPokemonsFromApi();
    setPokemons([...data]);
  };

  useEffect(() => {
    pokemonsGetted();
  }, []);

  return (
    <PokedexContext.Provider value={{ pokemons }}>
        { children }
    </PokedexContext.Provider>
  )
}
