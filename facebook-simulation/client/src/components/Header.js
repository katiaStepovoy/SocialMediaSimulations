import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";

function Header(props) {
  const db = props.db;
  var name = "Remy Sharp";
  var label = "Whats on your mind, " + name + "?";
  var bcolor = props.bcolor;
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
    setValue("");
    post();
    props.setPosts([]);
  };

  return (
    <Card sx={{ backgroundColor: bcolor, borderRadius: 4, mt: "30px" }}>
      <CardContent>
        <TextField
          fullWidth
          id="postInput"
          label={label}
          multiline
          onChange={setInput}
          value={value}
        />
      </CardContent>
      <Grid container direction="row" spacing={2} padding={1}>
        <Grid item xs={4}>
          <Button
            variant="contained"
            fullWidth
            sx={{ fontWeight: "700" }}
            onClick={onHandlePost}
          >
            Post
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            color="success"
            variant="outlined"
            fullWidth
            startIcon={<AddPhotoAlternateIcon />}
            sx={{ fontWeight: "700" }}
          >
            Add a photo
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            color="secondary"
            variant="outlined"
            fullWidth
            startIcon={<VideoCallIcon />}
            sx={{ fontWeight: "700" }}
          >
            Start live video
          </Button>
        </Grid>
      </Grid>
      <CardActions padding=""></CardActions>
    </Card>
  );
}

export default Header;
