import { Grid } from '@mui/material'
import React from 'react'
import Song from './Song'

function AllSongsSection({allSongsData}) {
  return (
    <Grid item xs={2}>
            <div className='right_page_bottom_greet'>
                {   
                   allSongsData.title
                     
                }
            </div>
            <div className='right_page_top_recommendation'>
                <Grid container spacing={2}>
                    {
                        allSongsData.songs.map((song,item)=>{
                           return <Grid item xs={2} xl={2} >
                                <Song songDetails = {song}/>
                            </Grid>
                        })
                    }
                </Grid>
            </div>
        </Grid>
  )
}

export default AllSongsSection