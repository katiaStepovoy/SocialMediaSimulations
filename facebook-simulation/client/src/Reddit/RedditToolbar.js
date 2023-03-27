import * as React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import RedditIcon from "@mui/icons-material/Reddit";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";

function RedditToolbar(props) {
  const name = "Remy Sharp";

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    flexGrow: 3,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  return (
    <AppBar
      sx={{
        width: "100%",
        overflow: "hidden",
        position: "fixed",
        backgroundColor: "#A4A4A4",
      }}
    >
      <Toolbar>
        <>
          <RedditIcon
            sx={{
              mr: 1,
              backgroundColor: "red",
              borderRadius: "100%",
              fontSize: "32px",
              borderColor: "#FF4500",
            }}
          />
          <Typography
            sx={{ color: "black", letterSpacing: "0" }}
            fontSize="22px"
            variant="body2"
            fontFamily="Segoe UI"
          >
            Reddit
          </Typography>
        </>
        <Search>
          <SearchIcon
            sx={{
              marginLeft: 1.5,
              height: "100%",
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />

          <StyledInputBase
            placeholder="Search Reddit"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <FaceOutlinedIcon sx={{ paddingRight: 2 }} />
        <Typography color="inherit">{name}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default RedditToolbar;
