import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokedexContext } from "../../context/PokedexContext";
import { pokeData } from "../helpers";

export const usePokemons = () => {
    const { pokemonId } = useParams();
    const { pokemons } = useContext(PokedexContext);
    const [pokemon, setPokemon] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    //   agarra la data completa de un pokemon solamente cuando el usuario entra
    const getFullData = async () => {
        if (pokemons !== undefined) {
            setIsLoading(true);
            const url = pokemons[pokemonId - 1].url;
            const data = await pokeData(url);
            setPokemon({...data});
            setIsLoading(false);
        };
    };
    //   Dispara la funcion anteriormente creada
    useEffect(() => {
        getFullData();
    }, [pokemons]);


    return {
        pokemons,
        isLoading,
        pokemon
    }
}
