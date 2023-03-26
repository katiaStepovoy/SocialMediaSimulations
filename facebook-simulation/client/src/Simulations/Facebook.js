import * as React from "react";
import Feed from "../components/Feed.js";
import Contacts from "../components/Contacts.js";
import Menu from "../components/Menu.js";
import Grid from "@mui/material/Grid";

function Facebook() {
  document.title = "Facebook";
  return (
    <Grid container spacing={5} style={{ backgroundColor: "Gainsboro" }}>
      <Grid item xs={2.5}>
        <Menu provider={"Facemock"} />
      </Grid>
      <Grid item xs={7}>
        <Feed
          backgroundColor="transparent"
          db="https://mockups.onrender.com/facebook"
        />
      </Grid>
      <Grid item xs={2.5}>
        <Contacts />
      </Grid>
    </Grid>
  );
}

export default Facebook;
