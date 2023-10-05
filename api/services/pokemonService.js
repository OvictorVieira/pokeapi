const { serializePokemonData } = require('../serializers/pokemonSerializer');

/**
 * Extract Pokémon abilities alphabetically.
 *
 * @param {Object} pokemonData - The raw data from the PokeAPI.
 * @returns {Object} - A array of Pokémon abilities.
 */
const processPokemonData = (pokemonData) => {
    if (!pokemonData || !pokemonData.abilities) {
        return {
            "abilities": []
        };
    }

    const abilities = pokemonData.abilities.map(abilityObj => abilityObj.ability.name);
    return serializePokemonData(abilities);
};

module.exports = {
    processPokemonData
};
