import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

function Contacts(props) {
  var fontColor = props.fontColor;
  var names = [
    "Lewis Werner",
    "Tiffany Benitez",
    "Annalise Evans",
    "Gracie Lawson",
    "Jonathan Mooney",
    "Marcelo Haynes",
    "Jayvion Bryant",
    "Aubrie Proctor",
    "Marc Mata",
    "Adison Kennedy",
    "Bryson Swanson",
    "Lilianna Fitzpatrick",
    "Averie Hendricks",
    "Mikaela Watson",
    "Yusuf Heath",
    "Giana Kline",
    "Amaris Peck",
    "Paloma Cabrera",
    "Jameson Mercer",
    "Lilyana Wilson",
  ];

  var namesList = [];
  names.forEach((name) => {
    namesList.push(
      <ListItem key={name}>
        <ListItemAvatar>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar alt={name} src="/static/images/avatar/1.jpg" />
          </StyledBadge>
        </ListItemAvatar>
        <Typography
          color={fontColor}
          sx={{ fontFamily: "Helvetica", fontSize: 14 }}
        >
          {name}
        </Typography>
      </ListItem>
    );
  });

  return (
    <Paper elevation={0} sx={{ bgcolor: "transparent" }}>
      <Box sx={{ mt: 4 }}>
        <Typography fontSize="1.5vw" color="gray" fontWeight="700">
          Contacts
        </Typography>
      </Box>
      <List>{namesList}</List>
    </Paper>
  );
}

export default Contacts;
