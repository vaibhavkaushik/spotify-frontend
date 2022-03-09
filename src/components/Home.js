import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import './Home.css'

function Home() {
  return (
    <div>

        {/* Bottom player navigatior*/}
        <div>
            <BottomNavigation className='song_nav_bar'/>
        </div>
    </div>
  )
}

export default Home