import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function PostForm(props) {
  const db = props.db;
  const [name, setName] = useState("");
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

  const setInput = (event) => setValue(event.target.value);
  const setNameInput = (input) => setName(input.target.value);

  const onHandlePost = (e) => {
    e.preventDefault();
    post();
    setValue("");
    setName("");
    props.setPosts([]);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="off"
                onChange={setNameInput}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-multiline-flexible"
                label="Post Content"
                multiline
                rows={4}
                onChange={setInput}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={onHandlePost}
          >
            Post
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default PostForm;
