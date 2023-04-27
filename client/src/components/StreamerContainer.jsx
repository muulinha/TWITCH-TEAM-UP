import React from 'react';
import "./StreamerContainer.css";
// import Button from '../components/Button'



// needs to figure out how to bring the data from the API




const StreamerContainer = () => {
    return ( 
        <div id='streamer-container' className='streamer-container'>
          <div id='profile_image_url' className='streamer-profile-picture'>
            {/* <img src="../images/twitch-logo-png-1858.png" alt="Profile Picture" /> */}
          </div>
          <div  className='streamer-name-game-container'>
            <div id='display-name' className='streamer-display-name'>muulinha</div>
            <div id='game-name' className='streamer-game-name'>Counter-Strike</div>
            </div>
            <div id='type' className='streamer-status online'></div>
            <div id= 'viewer-count' className='streamer-viewer_count'>123412</div>
            {/* <Button>INVITE <br></br>PLAY </Button> */}
        </div>
     );
}
 

export default StreamerContainer;