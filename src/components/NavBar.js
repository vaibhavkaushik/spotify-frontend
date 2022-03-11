import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import './NavBar.css'
import { Favorite, FavoriteBorder, PauseCircleFilled, PlayCircleFilled, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown, VolumeUp } from '@mui/icons-material';
import { Avatar, Grid, Slider, Stack } from '@mui/material';
import { red } from '@mui/material/colors';

function NavBar() {

    const [flag, setFlag] = React.useState(true);
    const [play, setPlay] = React.useState(true);
    const [value, setValue] = React.useState(30);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleClick = () => {
      setFlag(!flag);
    };
    
    const playPause = () => {
      setPlay(!play);
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
                                    { play ? <PlayCircleFilled onClick={playPause} className='song_play' fontSize='large'/> : <PauseCircleFilled onClick={playPause} className='song_play' fontSize='large'/> } 
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
                                <Slider defaultValue={50} className='song_slider' size='small' aria-label="Default" valueLabelDisplay="auto" />
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className='right_container'>
                            <div className='volume_controls'>
                                <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                                    <VolumeDown className='volume_icon' />
                                        <Slider className='song_slider' aria-label="Volume" value={value} onChange={handleChange} />
                                    <VolumeUp  className='volume_icon' />
                                </Stack>
                            </div>
                        </div>
                    </Grid>
                
                </Grid> 
                
            </BottomNavigation>
        </div>
    </div>
  )
}

export default NavBar