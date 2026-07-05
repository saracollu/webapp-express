const express = require('express');
const app = express();
const port = process.env.API_SERVER_PORT || 3000;

app.get('/', (req, res) => {
    res.send('Ciao Mondo');
});

app.listen(port, () => {
    console.log(`Server in ascolto sulla porta http://localhost:${port}`);
});
