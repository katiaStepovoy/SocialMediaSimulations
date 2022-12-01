import * as React from 'react';
import { Paper, Stack } from '@mui/material';
import Post from './Post';
import Header from './Header';

function Feed() {
    return (
        <Paper elevation={0} sx={{ bgcolor: 'transparent' }} >
            <Stack spacing={2} >
                <Header />
                <Post />
                <Post />
                <Post />
            </Stack>
        </Paper>
    );
}

export default Feed;
