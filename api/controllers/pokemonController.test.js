const { getPokemonByName } = require('../controllers/pokemonController');
const { getPokemonData } = require('../integration/pokeapiIntegration');
const { processPokemonData } = require('../services/pokemonService');

jest.mock('../integration/pokeapiIntegration');
jest.mock('../services/pokemonService');
jest.mock('../exceptions/PokemonNotFoundException');
jest.mock('../exceptions/PokemonDataFetchException');

const mockRequest = (params = {}) => ({
    params
});

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

describe('pokemonController', () => {

    it('should return processed pokemon data', async () => {
        const req = mockRequest({ name: 'ditto' });
        const res = mockResponse();

        getPokemonData.mockResolvedValueOnce({ abilities: ['test'] });
        processPokemonData.mockReturnValueOnce({ abilities: ['test'] });

        await getPokemonByName(req, res);

        expect(res.json).toHaveBeenCalledWith({ abilities: ['test'] });
    });
});
