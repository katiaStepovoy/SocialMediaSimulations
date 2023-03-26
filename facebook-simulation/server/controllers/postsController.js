const bodyParser = require("body-parser");

const Post = require("../models/post");

exports.getFacebookPosts = (req, res) => {
  Post.fetchAll("facebookPosts")
    .then(res.setHeader("Access-Control-Allow-Origin", "*"))
    .then((posts) => res.send(posts))
    .catch((err) => conosole.log(err));
};

exports.postFacebookPost = (req, res, next) => {
  const post = new Post(
    req.body.long,
    req.body.lat,
    req.body.content,
    req.body.time,
    req.body.username
  );
  post
    .save("facebookPosts")
    //.then((res) => res.redirect("/"))
    .catch((err) => console.log(err));
};

exports.getTwitterPosts = (req, res) => {
  Post.fetchAll("twitterPosts")
    .then(res.setHeader("Access-Control-Allow-Origin", "*"))
    .then((posts) => res.send(posts))
    .catch((err) => conosole.log(err));
};

exports.postTwitterPost = (req, res, next) => {
  const post = new Post(
    req.body.long,
    req.body.lat,
    req.body.content,
    req.body.time,
    req.body.username
  );
  post.save("twitterPosts").catch((err) => console.log(err));
};
