import * as React from "react";
import { Paper, Stack } from "@mui/material";
import Post from "./Post";
import Header from "./Header";
import { useState, useEffect } from "react";
import RedditHeader from "../Reddit/RedditHeader.js";

function Feed(props) {
  const db = props.db;
  const reddit = props.reddit;
  const [posts, setPosts] = useState([]);
  const name = props.name;

  useEffect(() => {
    fetch(db)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err.message));
  }, [posts, db]);

  posts.sort((post1, post2) => post1.time.localeCompare(post2.time)).reverse();

  var bcolor = props.bcolor;
  return (
    <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
      <Stack spacing={2}>
        {reddit ? (
          <RedditHeader updatePosts={setPosts} db={db} name={name} />
        ) : (
          <Header bcolor={bcolor} updatePosts={setPosts} db={db} name={name} />
        )}
        {posts.map((post, index) => (
          <Post
            key={index}
            backgroundColor={bcolor}
            content={post.content}
            date={post.time}
            name={post.username}
            lat={post.lat}
            long={post.long}
          />
        ))}
      </Stack>
    </Paper>
  );
}

export default Feed;
