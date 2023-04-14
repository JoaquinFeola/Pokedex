import { useContext } from 'react';
import { PokedexContext } from '../../context/PokedexContext';
import { PokemonCard } from '../components/PokemonCard';

export const PokedexContent = () => {
  
  const { pokemons } = useContext(PokedexContext);

  return (
    <div className='content-page-container m-4'>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {
          (pokemons)
            && pokemons.map((pokemon) => (
              <PokemonCard 
                key={pokemon.id}
                pokemonData={pokemon} 
              />
            ))
        }
      </div>
        <button className='btn btn-primary'>
          Cargar más
        </button>
    </div>
  )
}
