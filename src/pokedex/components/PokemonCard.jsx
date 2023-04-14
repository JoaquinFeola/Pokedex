import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ pokemonData }) => {
    const navigate = useNavigate();
    const navigatePokemon = () => {
        navigate(`/Pokedex/pokdex/${pokemonData.id}`)
    };
    return (
        <div className="card animate__animated">
            <img src={ pokemonData.imageURL } alt={ pokemonData.name } onClick={navigatePokemon} className="card-img" />
            <div className="card-body">
                <p className="text-muted">N.° {`${(pokemonData.id)}`}</p>
                <h4 className="card-title">{pokemonData.name}</h4>
                <div className="col">
                    Types:
                    <div className="row row-cols-3 container align-items-center">
                        <div className="col">
                            <span>Bug</span>
                        </div>
                        <div className="col">
                            <span>Poison</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
