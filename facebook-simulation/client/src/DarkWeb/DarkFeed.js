import * as React from "react";
import { Paper, Stack, Divider } from "@mui/material";
import DarkPost from "./DarkPost.js";
import PostForm from "./PostForm.js";

import { useState, useEffect } from "react";

function DarkFeed(props) {
  const db = props.db;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(db)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err.message));
  }, [posts, db]);

  posts.sort((post1, post2) => post1.time.localeCompare(post2.time)).reverse();

  return (
    <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
      <Stack spacing={2} alignItems="center">
        <PostForm setPosts={setPosts} db={db} />
        <Divider sx={{ margin: 2 }} />
        {posts.map((post, index) => (
          <DarkPost
            key={index}
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

export default DarkFeed;
