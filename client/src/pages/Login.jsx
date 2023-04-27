
import React from 'react';
import './Login.css';

// When the user clicks in "login", the page should redirect to the /home page
// the Twitch API fecthUser and fetchStreams should be triggered to populate the home page

const Login = () => {
    return ( 
        <div className='login-container'>
            <div className='backboard-img backboard-login'>
                <h1 className='login-title'>LOGIN </h1>
                     <p className='login-subtitles'> Twitch User:</p>
                     <input className='login-input' placeholder="Type your twitch user here..."></input>
                      <p className='login-subtitles'> Password:</p>
                       <input className='login-input' placeholder="Type your password here..."></input>
                       <div className='login-button'>
                       <a href='./Home'>
                       <button className='login-button'>LOGIN</button>
                        </a>
                       </div>
                 </div> 
        </div>
    );
};
 
export default Login;