const express = require('express');
const router = express.Router();


// route index
router.get('/', (req, res) => {
    res.send('Fetching all movies');
});


//route show
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send(`Fetching movie with ID: ${id}`);
});


module.exports = router;
