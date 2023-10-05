// 1. Valid Pokémon data with abilities.
const dittoMock = {
    "abilities": [
        {
            "ability": {
                "name": "limber",
                "url": "https://pokeapi.co/api/v2/ability/7/"
            },
            "is_hidden": false,
            "slot": 1
        },
        {
            "ability": {
                "name": "imposter",
                "url": "https://pokeapi.co/api/v2/ability/150/"
            },
            "is_hidden": true,
            "slot": 3
        }
    ]
};

// 2. Pokémon data without the `abilities` property.
const mockWithoutAbilities = {
    "name": "ditto"
};

// 3. Pokémon data with an empty `abilities` array.
const mockWithEmptyAbilities = {
    "abilities": []
};

module.exports = {
    dittoMock,
    mockWithoutAbilities,
    mockWithEmptyAbilities
};
