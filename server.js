const express = require('express');
const db = require('./db/controller');

const app = express();
const port = process.env.API_SERVER_PORT || 3000;




app.get('/', (req, res) => {
    res.send('Ciao Mondo');
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta http://localhost:${port}`);
});

//rotta index

app.get('/movies', (req, res) => {
    db.query('SELECT * FROM movies', (err, results) => {
        if (err) {
            console.error('Errore durante la query:', err.message);
            res.status(500).send('Errore interno del server');
        } else {
            res.json(results);
        }
    });
});