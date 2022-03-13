import React from 'react'
import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function SongTile({songDetails}) {

  return (
              <Card className='top_recommendation' sx={{ display: 'flex' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 100 }}
                        image={songDetails.songImageUrl}
                        alt="Live from space album cover"
                    />
                    <Box>
                        <CardContent>
                        <Typography className='recommendation_text'>
                            {songDetails.songName}
                        </Typography>
                        </CardContent>
                    </Box>                                                                          
                </Card>
        )
}

export default SongTile