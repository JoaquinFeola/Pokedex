import { useContext } from 'react';
import { PokedexContext } from '../../context/PokedexContext';
import PokemonCard from '../components/PokemonCard';
import LazyLoad from 'react-lazy-load';

export default function PokedexContent() {

  const { pokemons = [], isLoading } = useContext(PokedexContext);
  
  return (
    <div className='content-page-container m-4'>
      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {
          (pokemons && (isLoading == false))
            ? pokemons.map((pokemon) => (
              <LazyLoad key={pokemon.id} threshold={1} height={'max-content'}>
                <PokemonCard
                  pokemonData={pokemon}
                />
              </LazyLoad>
            ))
            : (
              <h4 className='display-1'>Cargando...</h4>
            )
        }
      </div>

    </div>
  )
}
