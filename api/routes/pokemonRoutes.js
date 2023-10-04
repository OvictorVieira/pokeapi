const express = require('express');
const router = express.Router();
const { getPokemonData } = require('../integration/pokeapiService');
const { processPokemonData } = require('../services/pokemonService');
const PokemonNotFoundException = require("../exceptions/PokemonNotFoundException");
const PokemonDataFetchException = require("../exceptions/exceptions/PokemonDataFetchException");

router.get('/pokemon/:name', async (req, res) => {
    const pokemonName = req.params.name;
    try {
        const pokemonName = req.params.name;
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
});

module.exports = router;
