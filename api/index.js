const express = require('express');
const app = express();
const routes = require('./routes/routes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');
const pokemonRoutes = require('./routes/pokemonRoutes');
const cors = require("cors");

app.use(cors());
app.use('/', routes);
app.use('/api/', pokemonRoutes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
