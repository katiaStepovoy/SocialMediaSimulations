const path = require('path');
const express = require('express');

const router = express.Router();

const postsController = require('../controllers/postsController');
const errorController = require('../controllers/errorController');

router.get('/facebook', postsController.getPosts);
router.get('/post', postsController.postPost);

router.use(errorController.err);

module.exports = router;