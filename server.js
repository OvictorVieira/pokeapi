const app = require('./api');
const { PORT } = require('./config/server');

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
