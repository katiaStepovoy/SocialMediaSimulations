const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const router = express.Router();

router.use(cors({ origin: "http://localhost:3000" }));

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const postsController = require("../controllers/postsController");
const errorController = require("../controllers/errorController");

router.get("/facebook", postsController.getPosts);
router.post("/facebook", postsController.postPost);

router.use(errorController.err);

module.exports = router;
