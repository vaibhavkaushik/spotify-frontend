import { Grid } from '@mui/material'
import React from 'react'
import SongTile from './SongTile'
import './TopRecommendations.css'

function TopRecommendations({topData}) {
  return (

    <Grid item xs={2}>
    <div className='right_page_greet'>
      {topData.greeting}
    </div>
    <div className='right_page_top_recommendation'>
        <Grid container spacing={2}>
            {
                topData.songsData.map((song,item)=>{
                   return <Grid item xs={4} xl={4}>
                        <SongTile songDetails = {song}/>
                    </Grid>
                })
            }
        </Grid>
    </div>
    </Grid>

  )
}

export default TopRecommendations