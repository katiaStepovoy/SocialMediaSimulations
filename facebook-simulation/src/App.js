import * as React from 'react';
import {Paper, Grid, Stack} from '@mui/material/Paper';
import  from '@mui/material/Grid';
import Post from './components/Post.js';
import Header from './components/Header.js';
import Contacts from './components/Contacts.js';
import  from '@mui/material/Stack';
import Menu from './components/Menu.js';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import Feed from './components/Feed.js';

function App() {
  return (
    <Grid container spacing={5} style={{ backgroundColor: 'Gainsboro' }}>
      <Grid item xs={2.5}>
        <Menu />
      </Grid>
      <Grid item xs={7}   >
        <Feed />
      </Grid>
      <Grid item xs={2.5} >
        <Contacts />
      </Grid>
    </Grid>
  );
}

export default App;