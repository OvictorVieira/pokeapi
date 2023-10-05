const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { getPokemonData } = require('./pokeapiIntegration');
const PokemonNotFoundException = require('../exceptions/PokemonNotFoundException');
const PokemonDataFetchException = require("../exceptions/PokemonDataFetchException");
const dittoMock = require('../mocks/dittoIntegrationMock'); // Import the mock data

describe('pokeapiIntegration', () => {
    const mock = new MockAdapter(axios);

    afterEach(() => {
        mock.reset();
    });

    it('should fetch pokemon data successfully', async () => {
        mock.onGet('https://pokeapi.co/api/v2/pokemon/ditto').reply(200, dittoMock);

        const result = await getPokemonData('ditto');
        expect(result).toEqual(dittoMock);
    });

    it('should throw PokemonNotFoundException for 404 response', async () => {
        mock.onGet('https://pokeapi.co/api/v2/pokemon/unknown').reply(404);

        await expect(getPokemonData('unknown')).rejects.toThrow(PokemonNotFoundException);
    });

    it('should throw PokemonDataFetchException for non-404 errors', async () => {
        mock.onGet('https://pokeapi.co/api/v2/pokemon/errorpokemon').reply(500);

        await expect(getPokemonData('errorpokemon')).rejects.toThrow(PokemonDataFetchException);
    });
});
