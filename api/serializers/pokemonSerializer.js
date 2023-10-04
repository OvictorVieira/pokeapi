/**
 * Serialize the raw Pokémon data to extract and sort abilities.
 *
 * @param {Object} pokemonData - The raw data from the PokeAPI.
 * @returns {{abilities: Object}} - A sorted array of Pokémon abilities.
 */
const serializeAndSortPokemonData = (pokemonData) => {
    return {
        "abilities": pokemonData.sort()
    };
};

module.exports = {
    serializePokemonData: serializeAndSortPokemonData
};
