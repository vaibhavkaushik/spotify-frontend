import React from 'react'
import NavBar from './NavBar'
import {Grid} from '@mui/material';
import './Home.css';

function Home() {
  return (
    <div>
        <Grid container>
            <Grid item xs={1.5} >
                <div className='left_menu'>
                   
                </div>
            </Grid>
            <Grid item xs={10.5} >
                <div className='right_page'>
                    
                </div>
            </Grid>
        </Grid>
        <NavBar/>
    </div>
  )
}

export default Home