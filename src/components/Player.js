import React from 'react';
import './Player.css';
import Footer from './spotify-page/Footer';
import Body from './spotify-page/Body';
import Sidebar from './spotify-page/Sidebar';

function Player({ spotify }) {
  return (
    <div className='player'>

      <div className='player__body'>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      
       <Footer />
    </div>
  )
}

export default Player