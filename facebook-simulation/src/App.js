import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Post from './components/Post.js';
import Header from './components/Header.js';
import Contacts from './components/Contacts.js';
import Stack from '@mui/material/Stack';
import Menu from './components/Menu.js';

function App() {

  return (
    <Grid container spacing={2} direction="row">

      <Grid item xs={2.5} overflow="auto" >
        <Menu/>
      </Grid>

      <Grid item xs={7}  >
        <Paper elevation={0} >
          <Stack spacing={2} >
            <Header />
            <Post />
            <Post />
          </Stack>
        </Paper>
      </Grid>

      <Grid item xs={2.5}>
        <Paper elevation={0}>
          <Contacts />
        </Paper>
      </Grid>

    </Grid>
  );
}

export default App;
