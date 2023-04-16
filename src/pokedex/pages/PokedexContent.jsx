import { useContext } from 'react';
import { PokedexContext } from '../../context/PokedexContext';
import PokemonCard from '../components/PokemonCard';

export default function PokedexContent() {

  const { pokemons = [], isLoading } = useContext(PokedexContext);
  
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

    </div>
  )
}
