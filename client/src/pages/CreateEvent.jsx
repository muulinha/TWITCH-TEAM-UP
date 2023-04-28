
import React from 'react';
// import './CreateEvent.css';

// When the user clicks in "login", the page should redirect to the /home page
// the Twitch API fecthUser and fetchStreams should be triggered to populate the home page

const CreateEvent = () => {
    return ( 
        <div className='create-event-container'>
            <div className='backboard-img backboard-login'>
                <h1 className='login-title'>CREATE EVENT </h1>
                <p className='login-subtitles'> Event Date:</p>
                <input className='login-input' placeholder="Type your twitch user here..."></input>
                <p className='login-subtitles'> Event Title:</p>
                <input className='login-input' placeholder="Type your password here..."></input>
                <p className='login-subtitles'> Event Description:</p>
                <input className='login-input' placeholder="Type your password here..."></input>
                <div className='buttons-align'>
                <div>
                    <a href='./Events'>
                    <button className='login-button'>CANCEL</button>
                    </a>
                </div>
                <div>
                    <a href='./Events'>
                    <button className='login-button'>CREATE</button>
                    </a>
                </div>
                </div>
            </div>
        </div> 
    );
};
 
export default CreateEvent;