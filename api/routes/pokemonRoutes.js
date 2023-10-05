const express = require('express');
const router = express.Router();
const { getPokemonByName } = require('../controllers/pokemonController');

router.get('/pokemon/:name', getPokemonByName);

module.exports = router;
