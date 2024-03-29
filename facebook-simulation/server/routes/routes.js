const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const router = express.Router();

router.use(cors({ origin: "https://project-simulations.onrender.com" }));
//router.use(cors({ origin: "http://localhost:3000" }));

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const postsController = require("../controllers/postsController");
const errorController = require("../controllers/errorController");

router.get("/facebook", postsController.getFacebookPosts);
router.post("/facebook", postsController.postFacebookPost);

router.get("/twitter", postsController.getTwitterPosts);
router.post("/twitter", postsController.postTwitterPost);

router.get("/reddit", postsController.getRedditPosts);
router.post("/reddit", postsController.postRedditPost);

router.get("/darkweb", postsController.getDarkPosts);
router.post("/darkweb", postsController.postDarkPost);

router.use(errorController.err);

module.exports = router;
