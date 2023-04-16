import { useContext, lazy, Suspense } from "react"
import { PokedexContext } from "../../context/PokedexContext";
import { searchPokemonByName } from "../helpers/searchPokemonByName";
import { useForm } from "../../hooks/useForm";
// import { PokemonCard } from "../components/PokemonCard.jsx";
const PokemonCard = lazy(() => import('../components/PokemonCard.jsx'))

export const SearchPage = () => {

  const { pokemons } = useContext(PokedexContext);
  const { searchText, onInputChange } = useForm({ searchText: '' });

  if (pokemons === undefined) return;

  const onFormSubmit = (e) => {
    e.preventDefault();
    searchText.trim();
  };
  const pokemonsFiltered = searchPokemonByName(pokemons, searchText);

  return (
    <div className="content-page-container">
      <h1 className="mt-3 text-center mb-4">Search pokemons</h1>
      <div className="row-cols-auto text-center d-flex flex-column align-items-center mt-2">
        <div className="col-5">
          <form onSubmit={onFormSubmit}>
            <input
              type="text"
              placeholder="Search a pokemon"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={onInputChange}
              autoComplete="off"
              maxLength={29}
            />
            <button type="submit" className="btn btn-primary mt-2 w-100 mb-4">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (searchText == '')
              ? (
                <div
                  className="alert alert-primary animate__animated animate__fadeInLeft"
                >
                  Search a pokemon
                </div>
              )
              : (pokemonsFiltered.length === 0) && (

                <div
                  className="alert alert-danger animate__animated animate__fadeInLeft"
                >
                  No pokemon with <b>{searchText}</b>
                </div>
              )
          }
        </div>
      </div>
      <div className="results-list d-flex justify-content-center flex-wrap gap-4 mb-4">
        <Suspense fallback={<h1 className="display-3">Cargando pokemones...</h1>} >
          {
            pokemonsFiltered.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemonData={pokemon} />
            ))
          }
        </Suspense>
      </div>
    </div>
  )
}
