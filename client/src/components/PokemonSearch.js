import React, { useState } from 'react';

const PokemonSearch = () => {
    const [pokemonName, setPokemonName] = useState('');
    const [pokemonData, setPokemonData] = useState(null);

    const handleSearch = async () => {
        try {
            const response = await fetch(`/api/pokemon/${pokemonName}`);
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.error("Error fetching Pokemon data:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter Pokemon name"
                value={pokemonName}
                onChange={(e) => setPokemonName(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {pokemonData && (
                <div>
                    <h2>{pokemonName}</h2>
                    <ul>
                        {pokemonData.abilities.map(ability => (
                            <li key={ability}>{ability}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PokemonSearch;
