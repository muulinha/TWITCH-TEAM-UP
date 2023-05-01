import React from 'react';
import "../pages/Login.css";
import "../pages/Index.css";
import "./CreateEvent.css";

const CreateEvent = () => {
    return ( 
        <div className='event-container'>
    <div className='backboard-img backboard-container'>
        <div className='event-container'>
           <h1 className='event-title'>CREATE EVENT</h1>
           <div className="input-container">
           <p className='event-subtitles'> Event Title:</p>
           <input className='event-input' placeholder="Type your twitch user here..."></input>
           <p className='event-subtitles'> Event Date</p>
           <input className='event-input' placeholder="Type your password here..."></input>
           <p className='event-subtitles'> Event Description</p>
           <input className='event-input event-description-input' placeholder="Type your password here..."></input>
           <button  className='login-button'>CANCEL</button>
           <button  className='login-button'>CREATE</button>
           </div>
        </div> 
        </div>
    </div>
     );
}

export default CreateEvent;