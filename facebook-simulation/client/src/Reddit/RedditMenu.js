import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBaseballOutlinedIcon from "@mui/icons-material/SportsBaseballOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";

function RedditMenu(props) {
  var categories = ["Gaming", "Sports", "Business", "Crypto", "Television"];
  var icons = [
    <SportsEsportsOutlinedIcon />,
    <SportsBaseballOutlinedIcon />,
    <ShowChartOutlinedIcon />,
    <CurrencyBitcoinOutlinedIcon />,
    <TvOutlinedIcon />,
  ];

  var itemsList = [];
  categories.forEach((category, index) => {
    const myicon = icons[index];
    itemsList.push(
      <ListItem key={index}>
        <ListItemAvatar>{myicon}</ListItemAvatar>
        {category}
      </ListItem>
    );
  });

  return (
    <List
      sx={{
        position: "center",
        fontFamily: "Helvetica",
        fontSize: 14,
        padding: 3,
        backgroundColor: "white",
      }}
    >
      <ListItem sx={{ color: "#989898" }}>Come visit our forums:</ListItem>
      {itemsList}
    </List>
  );
}

export default RedditMenu;
