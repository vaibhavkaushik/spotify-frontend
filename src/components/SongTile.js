import React from 'react'
import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function SongTile() {
  return (
    <Card className='top_recommendation' sx={{ display: 'flex' }}>
        <CardMedia
            component="img"
            sx={{ width: 100 }}
            image="https://upload.wikimedia.org/wikipedia/en/1/1b/Tum_Hi_Aana.jpg"
            alt="Live from space album cover"
        />
        <Box>
            <CardContent>
            <Typography className='recommendation_text'>
                Live From Space
            </Typography>
            </CardContent>
        </Box>                                                                          
    </Card>
  )
}

export default SongTile