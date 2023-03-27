import * as React from "react";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import EventIcon from "@mui/icons-material/Event";
import StarIcon from "@mui/icons-material/Star";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import TwitterIcon from "@mui/icons-material/Twitter";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function TwitterMenu(props) {
  return (
    <Paper
      elevation={0}
      sx={{ bgcolor: "transparent", overflow: "hidden", position: "fixed" }}
    >
      <TwitterIcon
        sx={{
          paddingLeft: "13vw",
          paddingTop: "5vh",
          color: "white",
          fontSize: "5vw",
        }}
      />
      <List sx={{ paddingLeft: "12.5vw" }}>
        <ListItem alignItems="center">
          <PersonIcon style={{ color: "white" }} />
        </ListItem>
        <ListItem>
          <GroupIcon style={{ color: "white" }} />
        </ListItem>
        <ListItem>
          <StorefrontIcon style={{ color: "white" }} />
        </ListItem>
        <ListItem>
          <EventIcon style={{ color: "white" }} />
        </ListItem>
        <ListItem>
          <StarIcon style={{ color: "white" }} />
        </ListItem>
        <ListItem>
          <BookmarkIcon style={{ color: "white" }} />
        </ListItem>
      </List>
    </Paper>
  );
}
export default TwitterMenu;
