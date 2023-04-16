import { Link } from 'react-router-dom';
import { usePokemons } from '../hooks/usePokemons';
const PokemonCardPage = ({ pokemon }) => {

  return (
    <div className="pok-card">
      <div className="card-top-body text-center">
        <h4 className='d-inline card-title'>{pokemon.name}</h4>
        <p className='d-inline m-3 text-muted'>N.° {pokemon.id}</p>
      </div>
      <div className="pokemon-card align-items-top">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className='card-img'
        />
        <div className="pokemons-stats mt-4 ">
          <div className="row text-center mt-4 ">
            <div className="col">
              <p className='text-white text-stat'>Height</p>
              <p className='text-stat-result'>{ pokemon.height / 10 } m</p>
              <p className='text-white text-stat'>Weight</p>
              <p className='text-stat-result'>{ pokemon.weight / 10 } kg</p>
            </div>
            <div className="col">
              <p className='text-white text-stat'>Category</p>
              <p className='text-white text-stat'>Category</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pokemon-types w-100 d-flex justify-content-center">
        <div className="row">
          <div className="col text-center">
            <h4>Types</h4>
            <div className="row text-center p-2">
              <p className='bg-primary text-white p-2 rounded'>{pokemon.types[0].type.name}</p>
              {
                ( pokemon.types.length > 1 ) 
                  && (
                    <p className='bg-primary text-white p-2 rounded'>{pokemon.types[1].type.name}</p>
                  )
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}



export const PokemonPage = () => {
  const { pokemon, isLoading } = usePokemons()

  return (
    <div className='content-page-container pokemon-page animate__animated '>
      <Link className='btn btn-primary back_btn' to={-1}>
        <i className="bi bi-arrow-left"> Back</i>

        </Link>
      {
        ( isLoading )
          ? (
            <h4 className='display-1 text-center m-5'>Cargando...</h4>
          )
          : (
            <PokemonCardPage pokemon={pokemon} />
            )
      }

    </div>
  )
}
