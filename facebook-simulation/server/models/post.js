const getDb = require("../util/database").getDb;

module.exports = class Post {
  constructor(long, lat, content, time, username) {
    this.long = long;
    this.lat = lat;
    this.content = content;
    this.time = time;
    this.username = username;
  }

  save() {
    const db = getDb();
    return db
      .collection("facebookPosts")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection("facebookPosts")
      .find()
      .toArray()
      .then((posts) => {
        return posts;
      })
      .catch((err) => console.log(err));
  }
  //fetchById() {}
};
