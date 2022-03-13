import React from 'react'
import NavBar from './NavBar'
import {Grid} from '@mui/material';
import './Home.css';
import RightPage from './RightPage';
import LeftMenu from './LeftMenu';

function Home() {
  return (
    <div>
        <Grid container>
            <Grid item xs={1.5} >
                <div className='left_menu'>
                   <LeftMenu/>
                </div>
            </Grid>
            <Grid item xs={10.5} >
                <div>
                   <RightPage/> 
                </div>
            </Grid>
        </Grid>
        <NavBar/>
    </div>
  )
}

export default Home