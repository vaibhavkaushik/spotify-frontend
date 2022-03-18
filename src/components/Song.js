import React from 'react'
import { Avatar, Box, Button, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function Song({songDetails}) {

  return (
              <CardActionArea > 
              <Card hoverable sx={{ height:'fit-content', width:175, flexDirection: 'column' , backgroundColor:'#161616'   , '&:hover': {background: "#2c2a35"}, padding:2, borderRadius:2 }}>
                      <CardMedia
                          component="img"
                          sx={{ minWidth:175, maxWidth:175, minHeight:175 ,maxHeight: 175, borderRadius:2 }}
                          image={songDetails.songImageUrl}
                          alt="Live from space album cover"
                      />
                      <CardContent sx={{ justifyContent: "center",flexDirection: "column"}}>
                        <Typography sx={{color:'white', whiteSpace: 'nowrap', overflow: 'hidden',  textOverflow: 'ellipsis', fontWeight:'bold', fontSize:15}} >
                            {songDetails.songName}
                        </Typography>
                      </CardContent>                                            
                </Card>
                </CardActionArea> 
        )
}

export default Song