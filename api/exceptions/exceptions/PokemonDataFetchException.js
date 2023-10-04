class PokemonDataFetchException extends Error {
    constructor(pokemonName, originalError) {
        super(`Failed to fetch data for ${pokemonName}: ${originalError.message}`);
        this.name = this.constructor.name;
        this.status = 500; // Internal Server Error status code
    }
}

module.exports = PokemonDataFetchException;
