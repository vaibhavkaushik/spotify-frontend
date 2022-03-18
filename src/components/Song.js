import React from 'react'
import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function Song({songDetails}) {

  return (
              <Card sx={{ display: 'flex', flexDirection: 'column' , backgroundColor:'#2c2a35', padding:2, borderRadius:2 }}>
                    <CardMedia
                        component="img"
                        sx={{ height: 200, borderRadius:2 }}
                        image={songDetails.songImageUrl}
                        alt="Live from space album cover"
                    />
                    <CardContent sx={{display:'flex',justifyContent: "center",flexDirection: "column"}}>
                      <Typography sx={{color:'white', fontWeight:'bold', fontSize:15}} >
                          {songDetails.songName}
                      </Typography>
                    </CardContent>                                                                          
                </Card>
        )
}

export default Song