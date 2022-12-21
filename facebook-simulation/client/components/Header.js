import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCallIcon from '@mui/icons-material/VideoCall';



function Header(props) {
    var name = "Remy Sharp";
    var label = "Whats on your mind, " + name + "?";
    var color = props.backgroundColor;

    return (
        <Card backgroundColor={color} sx={{ borderRadius: 4, height: 150, mt: '30px' }} >
            <CardContent>
                <TextField
                    fullWidth
                    id="outlined-password-input"
                    label={label}
                    type="password"
                />
            </CardContent>
            <Grid container direction="row" spacing={2} padding={1}>
                <Grid item xs={4}  >
                    <Button variant="contained" fullWidth  sx={{fontWeight:"700"}}>
                        Post
                    </Button>
                </Grid>
                <Grid item xs={4} >
                    <Button color="success" variant="outlined" fullWidth startIcon={<AddPhotoAlternateIcon />} sx={{fontWeight:"700"}}>
                        Add a photo
                    </Button>
                </Grid>
                <Grid item xs={4} >
                    <Button color="secondary" variant="outlined" fullWidth startIcon={<VideoCallIcon />} sx={{fontWeight:"700"}}>
                        Start live video
                    </Button>
                </Grid>
            </Grid>
            <CardActions padding=''>

            </CardActions>
        </Card>
    );
}

export default Header;
