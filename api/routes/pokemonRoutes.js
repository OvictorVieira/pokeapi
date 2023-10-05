const express = require('express');
const router = express.Router();
const { getPokemonByName } = require('../controllers/pokemonController'); // Import the controller function

router.get('/pokemon/:name', getPokemonByName); // Use the controller function

module.exports = router;
