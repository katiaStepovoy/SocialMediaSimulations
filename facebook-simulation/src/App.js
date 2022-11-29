import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
//import Box from '@mui/material/Box';
import Post from 'component/Post'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '96vh',
  lineHeight: '60px',
}));

function App() {
  var name="Remy Sharp";

  return (
    <Grid container spacing={2} direction="row">
      <Grid item xs={3}>
        <Item >
          <Typography padding={2} fontSize= '3.5vw' fontStyle= 'italic' color="navy" fontWeight='900' >
            Facemock
          </Typography>
          <Grid container padding= {4} spacing={2} direction="row" justifyContent="center" alignItems="center">
            <Grid item>
              <Avatar alt={name} src="/static/images/avatar/1.jpg" />
            </Grid>
            <Grid item>
              <Typography variant="h5" color="silver" sx={{fontSize: '1.5vw',  textAlign: 'center'}}>
                {name}
              </Typography>
            </Grid>
          </Grid>
          </Item>
      </Grid>


      <Grid item xs={7}>
        <Item>
            <Post/>
          
          
          
        </Item>
      </Grid>
      <Grid item xs={2}>
        <Item>xs=4</Item>
      </Grid>
    </Grid>

    // <div className="App">
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    // </div>
  );
}

export default App;
