const { processPokemonData } = require('./pokemonService');
const dittoMock = require('../mocks/dittoServiceMock'); // Assuming you have this mock data

describe('pokemonService', () => {

    it('should process and serialize pokemon abilities when data is valid', () => {
        const expectedResult = {
            "abilities": ["imposter", "limber"]
        };

        const result = processPokemonData(dittoMock.dittoMock);
        expect(result).toEqual(expectedResult);
    });

    it('should return an empty abilities array when pokemonData is null or undefined', () => {
        const expectedResult = {
            "abilities": []
        };

        expect(processPokemonData(dittoMock.mockWithEmptyAbilities)).toEqual(expectedResult);
        expect(processPokemonData(undefined)).toEqual(expectedResult);
    });

    it('should return an empty abilities array when abilities property is missing', () => {
        const expectedResult = {
            "abilities": []
        };

        expect(processPokemonData(dittoMock.mockWithoutAbilities)).toEqual(expectedResult);
    });

    it('should return an empty abilities array when abilities array is empty', () => {
        const expectedResult = {
            "abilities": []
        };

        expect(processPokemonData(dittoMock.mockWithEmptyAbilities)).toEqual(expectedResult);
    });

});
