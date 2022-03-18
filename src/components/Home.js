import React from 'react'
import NavBar from './NavBar'
import {Grid} from '@mui/material';
import './Home.css';
import RightPage from './RightPage';
import TopMenu from './TopMenu';

function Home() {
  return (
    <div>
        <Grid container direction={'column'}>
            <Grid item xs={1}>
              <TopMenu/>
            </Grid>
            <Grid xs={9} item style={{marginLeft:25, marginBottom:'5%'}} >
              <RightPage/> 
            </Grid>
            <Grid xs={2} item>
              <NavBar/>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default Home