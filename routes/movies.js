const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');


// route index
router.get('/', moviesController.index);


//route show
router.get('/:id', moviesController.show);




module.exports = router;
