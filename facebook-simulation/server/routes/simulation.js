const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/f', (req, res, next) => {
    res.sendFile(path.join(__dirname), '.../', 'src', 'Simulations', 'Facebook.js');
    console.log("server logged facebook");
});

router.use((req, res, next) => { 
	res.status(404).send('<h1>Page not found</h1>'); 
});

module.exports = router;