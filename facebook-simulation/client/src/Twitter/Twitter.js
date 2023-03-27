import * as React from "react";
import Feed from "../components/Feed.js";
import Contacts from "../components/Contacts.js";
import Grid from "@mui/material/Grid";
import TwitterMenu from "./TwitterMenu.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Twitter() {
  document.title = "Twitter";
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Grid container spacing={5} style={{ backgroundColor: "black" }}>
        <Grid item xs={2.5}>
          <TwitterMenu />
        </Grid>
        <Grid item xs={7}>
          <Feed bcolor="black" db="https://mockups.onrender.com/twitter" />
        </Grid>
        <Grid item xs={2.5}>
          <Contacts fontColor="white" />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Twitter;
