import * as React from 'react';
import Feed from '../components/Feed.js';
import Post from '../components/Post.js';
import Header from '../components/Header.js';
import Contacts from '../components/Contacts.js';
import Menu from '../components/Menu.js';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import styled from 'styled-components';

function Reddit() {

  return (

    <Grid container spacing={5} style={{ backgroundColor: 'Gainsboro' }}>
      <Grid item xs={2.5}>
        <Menu provider={'Reddit'}/>
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

export default Reddit;