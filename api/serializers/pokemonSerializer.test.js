const { serializePokemonData } = require('./pokemonSerializer');
const dittoMock = require('../mocks/dittoSerializerMock'); // Import the mock data

describe('pokemonSerializer', () => {

    it('should serialize and sort pokemon abilities when data exists', () => {
        const expectedResult = {
            "abilities": ["imposter", "limber"]
        };

        const result = serializePokemonData(dittoMock.abilities);
        expect(result).toEqual(expectedResult);
    });
});
