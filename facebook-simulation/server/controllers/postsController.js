const bodyParser = require("body-parser");

const Post = require("../models/post");

exports.getPosts = (req, res) => {
  Post.fetchAll()
    .then(res.setHeader("Access-Control-Allow-Origin", "*"))
    .then((posts) => res.send(posts))
    .catch((err) => conosole.log(err));
};

exports.postPost = (req, res, next) => {
  const post = new Post(
    req.body.long,
    req.body.lat,
    req.body.content,
    req.body.time,
    req.body.username
  );
  post
    .save()
    .then((res) => res.redirect("/facebook"))
    .catch((err) => console.log(err));
};
