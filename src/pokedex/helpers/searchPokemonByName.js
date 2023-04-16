
export const searchPokemonByName = ( pokemons = [], name = '' ) => {
    name = name.toLowerCase().trim();
    
    if ( name.length === 0 ) return [];

    return pokemons.filter( (pokemon) => pokemon.name.toLowerCase().includes(name));
}
