import * as React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Divider } from "@mui/material";
import DarkFeed from "./DarkFeed.js";

function DarkWeb() {
  document.title = "Dark Web";

  return (
    <>
      <Grid
        container
        direction="column"
        spacing={5}
        style={{ backgroundColor: "Gainsboro" }}
        align="center"
        justify="center"
      >
        <Grid
          item
          sx={{
            marginTop: "2vh",
          }}
        >
          <img
            src="https://blog.lingoda.com/wp-content/uploads/2020/10/10-news-sites-to-practice-your-English-reading-skills.jpg"
            alt="news"
            width="50%"
            height="auto"
            display="block"
          />
          <Typography variant="h3" fontFamily="Segoe UI" color="#C40000">
            /news/ - News
          </Typography>
          <Typography variant="h6" fontFamily="Segoe UI" color="#C40000">
            News & current events
          </Typography>
          <Divider sx={{ margin: 2 }} />
        </Grid>
        <Grid item>
          <DarkFeed db={"https://mockups.onrender.com/darkweb"} />
        </Grid>
      </Grid>
    </>
  );
}

export default DarkWeb;
