import * as React from 'react';
import { Paper, Stack } from '@mui/material';
import Post from './Post';
import Header from './Header';

function Feed(props) {
    var background = props.backgroundColor;
    return (
        <Paper elevation={0} sx={{ bgcolor: 'transparent' }} >
            <Stack spacing={2} >
                <Header backgroundColor={background}/>
                <Post backgroundColor={background}/>
                <Post backgroundColor={background}/>
                <Post backgroundColor={background}/>
            </Stack>
        </Paper>
    );
}

export default Feed;
