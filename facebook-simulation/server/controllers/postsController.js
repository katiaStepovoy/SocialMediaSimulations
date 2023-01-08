const Post = require("../models/post");

exports.getPosts = (req, res) => {
  Post.fetchAll()
  .then(res.setHeader("Access-Control-Allow-Origin", "*"))
  .then(posts => res.send(posts))
    .catch(err => conosole.log(err));
};

exports.postPost = (req, res, next) => {
  const post = new Post(
    "5.29.9.190",
    "have a bomb day yall",
    "2022-10-23T18:25:43.511Z",
    "Jayvion Bryant"
  );
  post.save()
  .then(result =>  res.redirect('/facebookpost'))
  .catch(err => console.log(arr));
};
