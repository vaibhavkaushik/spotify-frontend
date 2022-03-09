import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import './Home.css'
import { PlayCircleFilled, Repeat, Shuffle, SkipNext, SkipPrevious } from '@mui/icons-material';
import { Grid } from '@mui/material';

function Home() {
  return (
    <div>

        {/* Bottom player navigatior*/}
        <div>
            <BottomNavigation className='song_nav_bar'>
                <Grid container>
                    <Grid item xs={4}>

                    </Grid>
                    <Grid item xs={4}>
                        <div className='song_controls'>
                            <div className='all_icons'>
                                <div>
                                    <Shuffle className='song_play song_other'   />
                                </div>
                                <div>
                                    <SkipPrevious className='song_play song_other' />
                                </div>
                                <div>
                                    <PlayCircleFilled className='song_play' fontSize='large'/>
                                </div>
                                <div>
                                    <SkipNext className='song_play song_other'/>
                                </div>
                                <div>
                                    <Repeat className='song_play song_other'/>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={4}>

                    </Grid>
                
                </Grid> 
                
            </BottomNavigation>
        </div>
    </div>
  )
}

export default Home