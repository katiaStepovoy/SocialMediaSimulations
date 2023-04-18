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
      <Grid
        container
        justifyContent="center"
        spacing={5}
        style={{ backgroundColor: "Gainsboro" }}
      >
        <Grid item xs={12} sx={{ paddingBottom: 2 }}>
          <RedditToolbar />
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            display: "grid",
            margin: 2,
          }}
        >
          <Feed
            reddit={1}
            db="https://mockups.onrender.com/reddit"
            name="Red Jean"
          />
        </Grid>
        <Grid item xs={2} sx={{ justifyContent: "flex-end" }}>
          <RedditMenu />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Reddit;
