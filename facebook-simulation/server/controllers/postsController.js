const bodyParser = require("body-parser");

const Post = require("../models/post");

// Facebook
exports.getFacebookPosts = (req, res) => {
  Post.fetchAll("facebook")
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
    .save("facebook")
    //.then((res) => res.redirect("/"))
    .catch((err) => console.log(err));
};

// Twitter
exports.getTwitterPosts = (req, res) => {
  Post.fetchAll("twitter")
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
  post.save("twitter").catch((err) => console.log(err));
};

// Reddit
exports.getRedditPosts = (req, res) => {
  Post.fetchAll("reddit")
    .then(res.setHeader("Access-Control-Allow-Origin", "*"))
    .then((posts) => res.send(posts))
    .catch((err) => conosole.log(err));
};

exports.postRedditPost = (req, res, next) => {
  const post = new Post(
    req.body.long,
    req.body.lat,
    req.body.content,
    req.body.time,
    req.body.username
  );
  post.save("reddit").catch((err) => console.log(err));
};
