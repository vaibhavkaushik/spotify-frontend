import { Grid } from '@mui/material'
import React from 'react'
import AllSongsSection from './AllSongsSection';
import './RightPage.css'
import Song from './Song';
import TopRecommendations from './TopRecommendations';

function RightPage() {

    let topSongs = [
        { songImageUrl : 'https://upload.wikimedia.org/wikipedia/en/1/1b/Tum_Hi_Aana.jpg', songName : 'Tum Hi Aana' },
        { songImageUrl : 'https://pagalworldl.com/uploads/thumb/sft8/3712_4.jpg', songName : 'Agar Tum Saath Ho' },
        { songImageUrl : 'https://i.scdn.co/image/ab67616d0000b2738074d75f0e453804efcec351', songName : 'Srivalli' },
        { songImageUrl : 'https://static.wixstatic.com/media/4424e5_7c2af24331684c67b40041e77c12eb61~mv2.png/v1/fit/w_676%2Ch_372%2Cal_c/file.png', songName : 'Gulabi Aankhein' },
        { songImageUrl : 'https://c.saavncdn.com/540/Tum-Ko-Dekha-To-Compilation-2002-500x500.jpg', songName : 'Tum Ko Dekha Toh' },
        { songImageUrl : 'https://dailyhindilyrics.com/wp-content/uploads/2022/02/Tera-Naam-Dhokha-Rakh-Du-Lyrics.jpg', songName : 'Dhoka' },
      ];

//       Punjabiyan Di Dhee
// https://a10.gaanacdn.com/gn_img/albums/01A3mar3NQ/A3maDxX53N/size_m.webp


// Kuch Baatein Lyrics
// https://a10.gaanacdn.com/gn_img/albums/XYybzrb2gz/ybzN7ZLrb2/size_l.jpg


// Wait & Watch
// https://a10.gaanacdn.com/gn_img/albums/a7LWBzWzXA/LWBkrnAzbz/size_l.jpg


// Jatt Te Jawani
// https://a10.gaanacdn.com/gn_img/song/0wrb4qNKLg/rb48Br9VbL/size_l_1613976995.webp


// Guilty
// https://a10.gaanacdn.com/gn_img/albums/0wrb4qNKLg/rb4qMeYMKL/size_l_1610340681.webp


// Mere Warga
// https://a10.gaanacdn.com/gn_img/albums/g4w3vwrWjJ/w3vw4yL2Wj/size_l.webp


      let allSongs = [
            { 
                title : "Songs You Might Like",  
                songs :[
                    { songImageUrl : 'https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/rVW1dv2Y3k/size_l.webp', songName : 'Zaalima' },
                    { songImageUrl : 'https://a10.gaanacdn.com/gn_img/albums/Dk9KN2KBx1/k9KN8zvJWB/size_m.webp', songName : 'Dekha Hazaron Dafa' },
                    { songImageUrl : 'https://a10.gaanacdn.com/gn_img/song/g4w3vwrWjJ/w3vBwZeG3j/size_m_1516002790.webp', songName : 'Thodi Der' },
                    { songImageUrl : 'https://static.wixstatic.com/media/4424e5_7c2af24331684c67b40041e77c12eb61~mv2.png/v1/fit/w_676%2Ch_372%2Cal_c/file.png', songName : 'Gulabi Aankhein' },
                    { songImageUrl : 'https://c.saavncdn.com/540/Tum-Ko-Dekha-To-Compilation-2002-500x500.jpg', songName : 'Tum Ko Dekha Toh' },
                    { songImageUrl : 'https://dailyhindilyrics.com/wp-content/uploads/2022/02/Tera-Naam-Dhokha-Rakh-Du-Lyrics.jpg', songName : 'Dhoka' },
                ]
            },
            { 
                title : "Your Top Mixes",  
                songs :[
                    { songImageUrl : 'https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/rVW1dv2Y3k/size_l.webp', songName : 'Zaalima' },
                    { songImageUrl : 'https://a10.gaanacdn.com/gn_img/albums/Dk9KN2KBx1/k9KN8zvJWB/size_m.webp', songName : 'Dekha Hazaron Dafa' },
                    { songImageUrl : 'https://a10.gaanacdn.com/gn_img/song/g4w3vwrWjJ/w3vBwZeG3j/size_m_1516002790.webp', songName : 'Thodi Der' },
                    { songImageUrl : 'https://static.wixstatic.com/media/4424e5_7c2af24331684c67b40041e77c12eb61~mv2.png/v1/fit/w_676%2Ch_372%2Cal_c/file.png', songName : 'Gulabi Aankhein' },
                    { songImageUrl : 'https://c.saavncdn.com/540/Tum-Ko-Dekha-To-Compilation-2002-500x500.jpg', songName : 'Tum Ko Dekha Toh' },
                    { songImageUrl : 'https://dailyhindilyrics.com/wp-content/uploads/2022/02/Tera-Naam-Dhokha-Rakh-Du-Lyrics.jpg', songName : 'Dhoka' },
                ]
            },
            { 
                title : "More Of What You Might Like",  
                songs :[
                    { songImageUrl : 'https://a10.gaanacdn.com/gn_img/albums/7rVW1Rbk56/rVW1dv2Y3k/size_l.webp', songName : 'Zaalima' },
                    { songImageUrl : 'https://a10.gaanacdn.com/gn_img/albums/Dk9KN2KBx1/k9KN8zvJWB/size_m.webp', songName : 'Dekha Hazaron Dafa' },
                    { songImageUrl : 'https://a10.gaanacdn.com/gn_img/song/g4w3vwrWjJ/w3vBwZeG3j/size_m_1516002790.webp', songName : 'Thodi Der' },
                    { songImageUrl : 'https://static.wixstatic.com/media/4424e5_7c2af24331684c67b40041e77c12eb61~mv2.png/v1/fit/w_676%2Ch_372%2Cal_c/file.png', songName : 'Gulabi Aankhein' },
                    { songImageUrl : 'https://c.saavncdn.com/540/Tum-Ko-Dekha-To-Compilation-2002-500x500.jpg', songName : 'Tum Ko Dekha Toh' },
                    { songImageUrl : 'https://dailyhindilyrics.com/wp-content/uploads/2022/02/Tera-Naam-Dhokha-Rakh-Du-Lyrics.jpg', songName : 'Dhoka' },
                ]
            },
      ];

      let topDataObj = {
          songsData : topSongs,
          greeting : 'Good morning'
      };

  return (
    <div className='right_page'>

    
        <Grid container spacing={1} direction={'column'} style={{ width:'max-content'}}>
        
        <TopRecommendations topData={topDataObj} />
        {
            allSongs.map((songData,id) => {
                 
               return <AllSongsSection allSongsData={songData} />
            })
        }
        </Grid>
    </div>
  )
}

export default RightPage