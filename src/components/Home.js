import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import './Home.css'
import { Favorite, FavoriteBorder, PlayCircleFilled, Repeat, Shuffle, SkipNext, SkipPrevious } from '@mui/icons-material';
import { Avatar, Grid, Slider } from '@mui/material';
import { color } from '@mui/system';
import { red } from '@mui/material/colors';




function Home() {

  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };
  
  return (
    <div>

        {/* Bottom player navigatior*/}
        <div>
            <BottomNavigation className='song_nav_bar'>
                <Grid container>
                    <Grid item xs={4}>

                        <div className='left_container'>
                            <div className='song_info'>
                                    <div className='song_image'>
                                        <Avatar  sx={{ width: 75, height: 75 }} src='https://upload.wikimedia.org/wikipedia/en/1/1b/Tum_Hi_Aana.jpg' variant='rounded' />
                                    </div>
                                    <div className='song_details'>
                                        <div className='song_name'>
                                            Tum Hi Aana
                                        </div>
                                        <div className='song_artist'>
                                            Jubin Nautiyal
                                        </div>
                                    </div>
                                    <div className='song_reaction'>
                                            {
                                                flag ? <FavoriteBorder onClick={handleClick}/> : <Favorite onClick={handleClick} sx={{color:red[500]}}/>
                                            }
                                    </div>
                            </div>
                        </div>
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
                        <div>
                                <Slider defaultValue={50} className='song_slider' size='medium' aria-label="Default" valueLabelDisplay="auto" />
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