import { Grid } from '@mui/material'
import React from 'react'
import './RightPage.css'
import SongTile from './SongTile'

function RightPage() {

    let songs = [
        { songImageUrl : 'https://upload.wikimedia.org/wikipedia/en/1/1b/Tum_Hi_Aana.jpg', songName : 'Tum Hi Aana' },
        { songImageUrl : 'https://pagalworldl.com/uploads/thumb/sft8/3712_4.jpg', songName : 'Agar Tum Saath Ho' },
        { songImageUrl : 'https://i.scdn.co/image/ab67616d0000b2738074d75f0e453804efcec351', songName : 'Srivalli' },
        { songImageUrl : 'https://static.wixstatic.com/media/4424e5_7c2af24331684c67b40041e77c12eb61~mv2.png/v1/fit/w_676%2Ch_372%2Cal_c/file.png', songName : 'Gulabi Aankhein' },
        { songImageUrl : 'https://c.saavncdn.com/540/Tum-Ko-Dekha-To-Compilation-2002-500x500.jpg', songName : 'Tum Ko Dekha Toh' },
        { songImageUrl : 'https://dailyhindilyrics.com/wp-content/uploads/2022/02/Tera-Naam-Dhokha-Rakh-Du-Lyrics.jpg', songName : 'Dhoka' },
      ];

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
                <Grid container spacing={1}>
                    {
                        songs.map((song,item)=>{
                           return <Grid item xs={4}>
                                <SongTile songDetails = {song}/>
                            </Grid>
                        })
                    }
                </Grid>
            </div>
        </Grid>

        </Grid>
    </div>
  )
}

export default RightPage