const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.send('Pokeapi Server Running from Routes');
});

module.exports = router;
