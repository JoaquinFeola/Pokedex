import { Link, useParams } from 'react-router-dom';
import { usePokemons } from '../hooks/usePokemons';

const PokemonCardPage = ({ pokemon }) => {
  return (
    <div className="pok-card">
      <div className="card-top-body text-center">
        <h4 className='d-inline card-title'>{pokemon.name}</h4>
        <p className='d-inline m-3 text-muted'>N.° {pokemon.id}</p>
      </div>
      <div className=" pokemon-card">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default}
          alt={pokemon.name}
          className='card-img'
        />
      </div>

    </div>
  )
}



export const PokemonPage = () => {
  const { pokemon, isLoading } = usePokemons()

  return (
    <div className='content-page-container pokemon-page animate__animated '>

      {
        (isLoading)
          ? (
            <h4>Cargando...</h4>
          )
          : (
            <PokemonCardPage pokemon={pokemon} />
          )
      }

      <Link className='btn btn-primary' to={-1}>Regresar</Link>
    </div>
  )
}
