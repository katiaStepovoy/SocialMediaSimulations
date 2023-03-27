import * as React from "react";
import Feed from "../components/Feed.js";
import Grid from "@mui/material/Grid";
import RedditToolbar from "./RedditToolbar.js";
import RedditMenu from "./RedditMenu.js";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Reddit() {
  document.title = "Reddit";

  const lightTheme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <ThemeProvider theme={lightTheme}>
      <Grid container spacing={5} style={{ backgroundColor: "Gainsboro" }}>
        <Grid item xs={12} sx={{ paddingBottom: 2 }}>
          <RedditToolbar />
        </Grid>
        <Grid item xs={9.5}>
          <Feed reddit={1} db="https://mockups.onrender.com/reddit" />
        </Grid>
        <Grid item xs={2.5}>
          <RedditMenu />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Reddit;
