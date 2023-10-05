import React, { useState } from 'react';
import searchPokemon from '../services/pokemonSearch';

const PokemonSearch = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const data = await searchPokemon(pokemonName.toLocaleLowerCase());
            setPokemonData(data);
            setError(null);
        } catch (err) {
            setError('Error fetching Pokemon data.');
            console.error(err);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
                placeholder="Enter Pokemon name"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {pokemonData && (
                <div>
                    <h2>{pokemonName}</h2>
                    <ul>
                        {pokemonData.abilities.map((abilityObj, index) => (
                            <li key={index}>
                                <strong>Ability:</strong> {abilityObj} <br />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PokemonSearch;
