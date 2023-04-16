import axios from "axios";

export const getPokemonsFromApi = async(maxPokemons) => {

    const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${maxPokemons}}`);
    const pokemonsData = await pokemons.data;
    const data = pokemonsData.results.map((pokemon, i) => {
        return {
            ...pokemon,
            id: i+1,
            imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+ 1}.png`,
        };
    });
    return data
};
