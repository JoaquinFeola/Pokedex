import { Link } from 'react-router-dom';
import { usePokemons } from '../hooks/usePokemons';
const PokemonCardPage = ({ pokemon }) => {
  console.log(pokemon);
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
              <p className='text-white text-stat'>Abilities</p>
              <p className='text-stat-result'>{pokemon.abilities[0].ability.name}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="pokemon-types w-100 d-flex justify-content-center">
        <div className="row">
            <div className="stats rounded ">
              <h3 className='text-white'>Base points</h3>
              {
                pokemon.stats.map((stat) => (
                  <h4 
                    key={`${stat.stat.name}${pokemon.name}`} 
                    className=' p-2 text-white'
                  >
                    {stat.stat.name}: <b>{stat.base_stat}</b>
                  </h4>
                ))
              }
          </div>
          <div className="col text-center pokemon-types-container mt-4">
            <h4>Types</h4>
            <div className="row text-center p-2">
              <p 
                className='text-white p-2 rounded' 
                style={{ background:  `var(--${pokemon.types[0].type.name})` }}
              >
                  <b>{pokemon.types[0].type.name}</b>
              </p>
              {
                ( pokemon.types.length > 1 ) 
                  && (
                    <p 
                      className='text-white p-2 rounded'
                      style={{ background:  `var(--${pokemon.types[1].type.name})` }}

                    >
                      <b>{pokemon.types[1].type.name}</b>
                    </p>
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
  const { pokemon, isLoading } = usePokemons();

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
