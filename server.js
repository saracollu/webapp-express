const express = require('express');
const db = require('./db/connection');

const app = express();
const port = process.env.API_SERVER_PORT || 3000;

const moviesRouter = require('./routes/movies');
const notFound = require('./middleware/notFound');
const serverError = require('./middleware/serverError');

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.send('Ciao Mondo');
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta http://localhost:${port}`);
});

app.use('/api/v1/movies', moviesRouter);

app.use(serverError);
app.use(notFound);
