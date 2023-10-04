const axios = require('axios');
const PokemonNotFoundException = require('../exceptions/PokemonNotFoundException');
const PokemonDataFetchException = require("../exceptions/PokemonDataFetchException");

const BASE_URL = 'https://pokeapi.co/api/v2';

const getPokemonData = async (pokemonName) => {
    try {
        const response = await axios.get(`${BASE_URL}/pokemon/${pokemonName}`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            throw new PokemonNotFoundException(pokemonName);
        }

        throw new PokemonDataFetchException(pokemonName, error);
    }
};

module.exports = {
    getPokemonData
};
