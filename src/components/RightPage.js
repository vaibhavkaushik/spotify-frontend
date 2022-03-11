import { Grid } from '@mui/material'
import React from 'react'
import './RightPage.css'
import SongTile from './SongTile'

function RightPage() {
  return (
    <div className='right_page'>

        <Grid container spacing={1} direction={'column'} style={{ height: "100%" }}>

        <Grid item xs={2}>
            <div className='right_page_greet'>
               Good evening
            </div>
        </Grid>
        
        <Grid item xs={2}>
            <div className='right_page_top_recommendation'>

                <Grid container direction={'column'} spacing={3}>
                    <Grid item xs={6}>
                        <Grid container spacing={6}>
                            
                                <Grid item xs={4}>
                                    <SongTile/>
                                </Grid>
                            
                                <Grid item xs={4}>
                                    <SongTile/>
                                </Grid>

                                <Grid item xs={4}>
                                    <SongTile/>
                                </Grid>
                        </Grid>
                </Grid>
                <Grid item xs={6}>
                        <Grid container spacing={6}>

                                <Grid item xs={4}>
                                    <SongTile/>
                                </Grid>

                                
                                <Grid item xs={4}>
                                    <SongTile/>
                                </Grid>

                                
                                <Grid item xs={4}>
                                    <SongTile/>
                                </Grid>
                        </Grid>
                </Grid>
                </Grid>
            </div>
        </Grid>
        
        <Grid item xs={2}>
            
        </Grid>
        
        <Grid item xs={2}>
            
        </Grid>
        
        <Grid item xs={2}>
            
        </Grid>

        
        <Grid item xs={2}>
            
        </Grid>


        </Grid>
    </div>
  )
}

export default RightPage