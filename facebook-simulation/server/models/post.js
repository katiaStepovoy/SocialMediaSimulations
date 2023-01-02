const getDb = require("../util/database").getDb;

class Post {
  constructor(location, content, time, username) {
    this.location = location;
    this.content = content;
    this.time = time;
    this.username = username;
  }

  save() {
    const db = getDb();
    db.collection("Facebook").insertOne({
      location: "5.29.9.190",
      content: "have a bomb day yall",
      time: "2022-10-23T18:25:43.511Z",
      username: "Jayvion Bryant",
    });
  }
}
