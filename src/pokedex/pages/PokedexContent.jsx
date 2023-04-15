import { useContext, useState } from 'react';
import { PokedexContext } from '../../context/PokedexContext';
import { PokemonCard } from '../components/PokemonCard';

export const PokedexContent = () => {

  const { pokemons, maxPokemons, setMaxPokemons, isLoading } = useContext(PokedexContext);
  const getAllPokemons = (e) => {
    setMaxPokemons(maxPokemons + 988)
  };
  return (
    <div className='content-page-container m-4'>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {
          (pokemons && (isLoading == false))
            ? pokemons.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                pokemonData={pokemon}
              />
            ))
            : (
              <h4 className='display-1'>Cargando...</h4>
            )
        }
      </div>


      <button className='btn btn-primary'
        onClick={getAllPokemons}
        disabled={isLoading}
      >
        Cargar todos
      </button>
    </div>
  )
}
