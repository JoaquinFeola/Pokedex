import { Link, useParams } from 'react-router-dom';
import { usePokemons } from '../hooks/usePokemons';
const PokemonCardPage = ({ pokemon }) => {
  const lag = 10
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
        (isLoading)
          ? (
            <h4>Cargando...</h4>
          )
          : (
            <PokemonCardPage pokemon={pokemon} />
            )
      }

    </div>
  )
}
