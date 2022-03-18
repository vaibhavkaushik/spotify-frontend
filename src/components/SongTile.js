import React from 'react'
import { Avatar, Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function SongTile({songDetails}) {

  return (
              <Card sx={{ display: 'flex',  backgroundColor:'#2c2a35' }}>
                    <CardMedia
                        component="img"
                        sx={{ minWidth:100, minHeight:100, maxWidth: 100, maxHeight: 100}}
                        image={songDetails.songImageUrl}
                    />
                    <CardContent sx={{display:'flex',justifyContent: "center",flexDirection: "column"}}>
                      <Typography sx={{whiteSpace: 'nowrap', overflow: 'hidden',  textOverflow: 'ellipsis', color:'white', fontWeight:'bold', fontSize:15}} >
                          {songDetails.songName}
                      </Typography>
                    </CardContent>                                                                          
                </Card>
        )
}

export default SongTile