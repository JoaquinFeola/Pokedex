import LazyLoad from "react-lazy-load";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ pokemonData }) {
    const navigate = useNavigate();

    const navigatePokemon = () => {
        navigate(`/pokedex/${pokemonData.id}`);
    };
    return (
        <div className="card animate__animated">
            <LazyLoad key={pokemonData.id}>
                <img src={ pokemonData.imageURL } alt={ pokemonData.name } onClick={navigatePokemon} loading="lazy" className="card-img" />
            </LazyLoad>
            <div className="card-body">
                <p className="text-muted">N.° {`${(pokemonData.id)}`}</p>
                <h4 className="card-title">{pokemonData.name}</h4>
            </div>
        </div>
    )
}
