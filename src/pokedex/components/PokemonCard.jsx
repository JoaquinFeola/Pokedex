import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ pokemonData }) => {
    const navigate = useNavigate();

    const navigatePokemon = () => {
        navigate(`/pokedex/${pokemonData.id}`);
    };
    return (
        <div className="card animate__animated">
            <img src={ pokemonData.imageURL } alt={ pokemonData.name } onClick={navigatePokemon} className="card-img" />
            <div className="card-body">
                <p className="text-muted">N.° {`${(pokemonData.id)}`}</p>
                <h4 className="card-title">{pokemonData.name}</h4>
            </div>
        </div>
    )
}
