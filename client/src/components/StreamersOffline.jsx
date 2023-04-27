import React from 'react';
import "./StreamerOffline.css";


const StreamersOffline = () => {
    return ( 
        <div id='streamer-container' className='streamer-container'>
          <div id='profile_image_url' className='streamer-profile-picture'>
          </div>
          <div  className='streamer-name-game-container'>
            <div id='display-name' className='streamer-display-name'>muulinha </div>
            <div id='game-name' className='streamer-game-name'>Counter-Strike </div>
            </div>
            <div id='streamer-status' className='streamer-status online'></div>
            <Button>INVITE <br></br>PLAY </Button>
        </div>
     );
}
 

export default StreamersOffline;