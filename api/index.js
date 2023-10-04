const express = require('express');
const app = express();
const routes = require('./routes/routes');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

app.use('/', routes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
