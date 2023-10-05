const { getPokemonData } = require('../integration/pokeapiIntegration');
const { processPokemonData } = require('../services/pokemonService');
const PokemonNotFoundException = require("../exceptions/PokemonNotFoundException");
const PokemonDataFetchException = require("../exceptions/PokemonDataFetchException");

const getPokemonByName = async (req, res) => {
    const pokemonName = req.params.name;
    try {
        const rawData = await getPokemonData(pokemonName);
        const processedData = processPokemonData(rawData);
        res.json(processedData);
    } catch (error) {
        if (error instanceof PokemonNotFoundException) {
            return res.status(error.status).json({ error: error.message });
        }

        if (error instanceof PokemonDataFetchException) {
            return res.status(error.status).json({ error: error.message });
        }

        res.status(500).json({ error: 'An unexpected error occurred' });
    }
};

module.exports = {
    getPokemonByName
};
