import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function RedditHeader(props) {
  const db = props.db;
  var name = props.name;
  var label = "Create Post";
  const [value, setValue] = useState("");
  var lat, long;

  // get user location
  navigator.geolocation.getCurrentPosition(function (position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
  });

  const post = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        long: long,
        lat: lat,
        content: value,
        time: new Date().toJSON(),
        username: name,
      }),
    };
    fetch(db, requestOptions)
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const setInput = (input) => setValue(input.target.value);

  const onHandlePost = (e) => {
    e.preventDefault();
    post();
    setValue("");
    props.setPosts([]);
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "grid",
        gridTemplateColumns: { md: "10fr 1fr" },
        gap: 2,
        margin: 3,
      }}
    >
      <TextField
        id="postInput"
        label={label}
        multiline
        onChange={setInput}
        value={value}
      />
      <Button
        variant="contained"
        sx={{
          fontWeight: "700",
          backgroundColor: "#FF4500",
        }}
        onClick={onHandlePost}
      >
        Post
      </Button>
    </Box>
  );
}

export default RedditHeader;
