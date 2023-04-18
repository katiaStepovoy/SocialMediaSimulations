import * as React from "react";
import Feed from "../components/Feed.js";
import Contacts from "../components/Contacts.js";
import Menu from "../components/Menu.js";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Facebook() {
  document.title = "Facebook";
  return (
    <Grid
      container
      spacing={5}
      style={{ backgroundColor: "Gainsboro", overflow: "auto" }}
    >
      <Grid item xs={2.5}>
        <Menu
          provider={"Facemock"}
          icon={
            <Typography fontSize="3vw" color="navy" fontWeight="900">
              Facebook
            </Typography>
          }
        />
      </Grid>
      <Grid item xs={7}>
        <Feed
          backgroundColor="transparent"
          db="https://mockups.onrender.com/facebook"
          name="Remy Sharp"
        />
      </Grid>
      <Grid item xs={2.5}>
        <Contacts />
      </Grid>
    </Grid>
  );
}

export default Facebook;
