import * as React from "react";
import { Paper, Stack } from "@mui/material";
import Post from "./Post";
import Header from "./Header";
import { useState, useEffect } from "react";

function Feed(props) {
  const db = props.db;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(db)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err.message));
  }, []);

  posts.sort((post1, post2) => post1.time.localeCompare(post2.time)).reverse();

  var bcolor = props.bcolor;
  return (
    <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
      <Stack spacing={2}>
        <Header bcolor={bcolor} />
        {posts.map((post) => (
          <Post
            backgroundColor={bcolor}
            content={post.content}
            date={post.time}
            name={post.username}
            location={post.location}
          />
        ))}
      </Stack>
    </Paper>
  );
}

export default Feed;
