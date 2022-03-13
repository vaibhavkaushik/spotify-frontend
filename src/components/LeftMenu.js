import React from 'react'
import './LeftMenu.css';
import { Avatar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function LeftMenu() {
  return (
    <div>

      <div className='section first_section'>
        <div className='app_image'>
          <Avatar sx={{ width: 60, height: 60 }} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png' variant='rounded' />
        </div>
        <div className='app_name'>
          Spotify
        </div>
      </div>

      <div className='section second_section'>
        <div className='home_info'>
          <div className='menus home'>
            <HomeIcon />
          </div>
          <div className='texts'>
            Home
          </div>
        </div>
        <div className='search_info'>
          <div className='menus search'>
            <SearchIcon />
          </div>
          <div className='texts'>
            Search
          </div>
        </div>
        <div className='library_info'>
          <div className='menus liberary'>
            <LibraryMusicIcon />
          </div>
          <div className='texts'>
            Library
          </div>
        </div>
      </div>

      <div className='section third_section'>
        <div className='playlist_info'>
          <div className='menus playlist'>
            <PlaylistAddIcon />
          </div>
          <div className='texts'>
            Playlist
          </div>
        </div>

        <div className='likedsongs_info'>
          <div className='menus likedsongs'>
            <FavoriteIcon />
          </div>
          <div className='texts'>
            Liked Songs
          </div>
        </div>
      </div>
    </div>
  )
}
