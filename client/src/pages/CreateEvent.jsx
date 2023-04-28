
import React from 'react';
// import './CreateEvent.css';


const CreateEvent = () => {

    


    return ( 
        <div className='create-event-container'>
            <div className='backboard-img backboard-login'>
                <h1 className='login-title'>CREATE EVENT </h1>
                <p className='login-subtitles'> Event Date:</p>
                <input 
                  className='login-input' 
                  required type="text" 
                  id="event-date" 
                  placeholder="dd/mm/yyyy"
                />
                
                <p className='login-subtitles'> Event Title:</p>
                <input 
                  className='login-input' 
                  required type="text" 
                  id="event-title" 
                  placeholder="Type the event title here..."
                />

                <p className='login-subtitles'> Event Description:</p>
                <input 
                  className='login-input' 
                  required type="text" 
                  id="event-description" 
                  placeholder="Type the event description here..."
                />

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