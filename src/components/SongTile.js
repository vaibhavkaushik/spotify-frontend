import React from 'react'
import { Avatar, Box, ButtonBase, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'

function SongTile({songDetails}) {

  return (
            
              <Card hoverable onClick={() => console.log("CardActionArea clicked")} sx={{ display: 'flex',  backgroundColor:'#2c2a35', '&:hover': {background: "#535353"}, width:'100%' }}>
                    <CardActionArea sx={{ display: 'flex'}}>
                      <CardMedia
                          component="img"
                          sx={{ minWidth:100, minHeight:100, maxWidth: 100, maxHeight: 100}}
                          image={songDetails.songImageUrl}
                      />
                      <CardContent sx={{display:'flex',justifyContent: "center",flexDirection: "column", width:'100%'}}>
                        <Typography sx={{width:'100%', whiteSpace: 'nowrap', overflow: 'hidden',  textOverflow: 'ellipsis', color:'white', fontWeight:'bold', fontSize:15}} >
                            {songDetails.songName}
                        </Typography>
                      </CardContent>
                    </CardActionArea>                                                        
                </Card>
        )
}

export default SongTile