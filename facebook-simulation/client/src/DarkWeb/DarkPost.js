import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Box from "@mui/material/Box";
import styled from "styled-components";

function DarkPost(props) {
  const name = props.name;
  const date = new Date(props.date).toLocaleString();
  const content = props.content;
  const location = "Lat. " + props.lat + " · Long. " + props.long;
  const details = (
    <DetailsBox sx={{ typography: "caption" }}>
      <Box>{date}</Box>
      <Location>
        <LocationOnIcon fontSize="small" />
        {location}
      </Location>
    </DetailsBox>
  );

  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: 4, width: "50%", textAlign: "left" }}
    >
      <CardHeader
        avatar={<NameIcon>{name.charAt(0)}</NameIcon>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={details}
      />
      <CardContent sx={{ typography: "body2", color: "text.secondary" }}>
        {content}
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default DarkPost;

const DetailsBox = styled(Box)({
  flexDirection: "row",
  display: "flex",
  gap: "30px",
  alignItems: "center",
});

const Location = styled(Box)({
  flexDirection: "row",
  display: "flex",
  alignItems: "center",
});

const NameIcon = styled(Avatar)({
  backgroundColor: red[500],
});
