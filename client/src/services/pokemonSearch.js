import api from '../config/axiosConfig';

const searchPokemon = async (pokemonName) => {
    try {
        const response = await api.get(`/api/pokemon/${pokemonName}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export default searchPokemon;
