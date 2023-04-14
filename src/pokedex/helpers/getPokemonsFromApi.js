import axios from "axios";
let num = 20;


export const getPokemonsFromApi = async() => {
    const pokemonsLength = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${num}}`);
    const pokemonsData = await pokemonsLength.data;
    const data = pokemonsData.results.map((pokemon, i) => {
        return {
            ...pokemon,
            id: i+1,
            imageURL: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i+ 1}.png`,
        };
    });
    return data;
};
