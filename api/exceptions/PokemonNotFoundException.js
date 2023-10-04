class PokemonNotFoundException extends Error {
    constructor(pokemonName) {
        super(`Pokemon ${pokemonName} not found`);
        this.name = this.constructor.name;
        this.status = 404;
    }
}

module.exports = PokemonNotFoundException;