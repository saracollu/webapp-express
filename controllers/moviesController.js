const connection = require('../db/connection');



const index = (req, res) => {
    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching movies:', err);
            return res.status(500).send({ error: true, message: 'Internal Server Error' });
        }
        res.json(results);

    });
};

const show = (req, res) => {
    const id = parseInt(req.params.id);

    const sql = 'SELECT * FROM movies WHERE id = ?';

    const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ?';

    connection.query(sql, [id], (err, movieResults) => {
        if (err) {
            console.error('Error fetching movie:', err);
            return res.status(500).send({ error: true, message: 'Internal Server Error' });
        }
        if (movieResults.length === 0) {
            return res.status(404).send({ error: true, message: 'Movie not found' });
        }
        const movie = movieResults[0];
        connection.query(reviewsSql, [id], (err, reviewsResults) => {
            if (err) {
                console.error('Error fetching reviews:', err);
                return res.status(500).send({ error: true, message: 'Internal Server Error' });
            }
            movie.reviews = reviewsResults;
            res.json(movie);
        });
    });
};

// store book (placeholder)
const store = (req, res) => {
    res.status(501).send({ error: true, message: 'Not Implemented' });
};

//store review (placeholder)
const storeReview = (req, res) => {
    res.status(501).send({ error: true, message: 'Not Implemented' });
};


module.exports = {
    index,
    show,
    store,
    storeReview
};