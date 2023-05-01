import React from 'react';
import "./EventLine.css";

const EventLine = () => {
    return ( 
        <div id='event-line-container' className='event-line-container'>
            
            <div className='event-date-container'>
              <div className='event-date'>10 <br></br>MAR</div>
            </div>
            <div className='event-streamer-container'>
                <div id='profile_image_url' className='streamer-profile-picture'></div>
                <div id='display-name' className='streamer-display-name padding'>muulinha </div>
            </div>  
          
            <div className='event-details-container'>
            <p className='event-details-title'>TITLE</p>
            <p className='event-details-description'>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quis quia sequi neque numquam sed repudiandae illo explicabo eum officia odit quae rem, debitis autem eos nulla dignissimos dolor earum?</p>
            </div>  
        </div>
     );
}

export default EventLine;