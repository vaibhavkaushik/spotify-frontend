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
            <Grid item >
              <TopMenu/>
            </Grid>
            <Grid item style={{marginLeft:25}} >
              <RightPage/> 
            </Grid>
        </Grid>
        <NavBar/>
    </div>
  )
}

export default Home