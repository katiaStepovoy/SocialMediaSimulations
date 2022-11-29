import * as React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';


function Menu() {
    var name = "Remy Sharp";

    return (
        <Paper elevation={0} position="fixed">
            <Typography padding={2} fontSize='4vh' color="navy" fontWeight='900' >
                Facemock
            </Typography>
            <Grid container padding={4} spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Grid item>
                    <Avatar sx={{ fontFamily: 'sans-serif' }} alt={name} src="/static/images/avatar/1.jpg" />
                </Grid>
                <Grid item>
                    <Typography variant="h5" color="silver" sx={{ fontFamily: 'sans-serif', fontSize: '1.5vw', textAlign: 'center' }}>
                        {name}
                    </Typography>
                </Grid>
            </Grid>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem >
                    <ListItemAvatar>
                        <Avatar alt={name} src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <Typography sx={{ fontFamily: "Helvetica", fontSize: 14 }}>{name}</Typography>

                </ListItem>

            </List>
            <Card>
            <CardMedia
        component="img"
        height="194"
        image="/Untitled.png"
        alt="Paella dish"
      />
            </Card>
        </Paper>
    );
}

export default Menu;
