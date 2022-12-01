import * as React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import GroupIcon from '@mui/icons-material/Group';
import { blue, red, yellow, purple } from '@mui/material/colors'; 
import StorefrontIcon from '@mui/icons-material/Storefront';
import EventIcon from '@mui/icons-material/Event';
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function Menu() {
    var name = "Remy Sharp";
    var categories = ["Friends", "Shop Online", "Events", "Favorites", "Saved"];
    var icons = [<GroupIcon sx={{ color: blue[300] }} />,
    <StorefrontIcon sx={{ color: blue[500] }} />,
    <EventIcon sx={{ color: red[300] }} />,
    <StarIcon sx={{ color: yellow[400] }} />,
    <BookmarkIcon sx={{ color: purple[400] }} />];

    var itemsList = [];
    categories.forEach((category, index) => {
        const myicon = icons[index];
        itemsList.push(
            <ListItem >
                <ListItemAvatar>
                    {myicon}
                </ListItemAvatar>
                {category}
            </ListItem>
        )
    })

    return (
        <Paper elevation={0} sx={{ bgcolor: 'transparent' }}>
            <Typography padding={2} fontSize='3vw' color="navy" fontWeight='900' >
                Facemock
            </Typography>
            <List sx={{fontFamily: "Helvetica", fontSize: 14, fontWeight: '600' }}>
                <ListItem >
                    <ListItemAvatar>
                        <Avatar alt={name} src="" />
                    </ListItemAvatar>
                    <Typography fontWeight= '600'>{name}</Typography>
                </ListItem>
                {itemsList}
            </List>
        </Paper>
    );
}

export default Menu;
