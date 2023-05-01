import React, {useState} from 'react';
import "../pages/Login.css";
import "../pages/Index.css";
import "./CreateEvent.css";
import axios from 'axios';

const CreateEvent = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    function handleTitleChange(event) {
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    function handleDateChange(event) {
        console.log(event.target.value)
        setDate(event.target.value)
    }

    function handleDescriptionChange(event) {
        console.log(event.target.value)
        setDescription(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const newEvent = {title, description, date}

        try { 
            const response = await axios.post('/api/events', newEvent)
            console.log('sucess') 
            setTitle('')
            setDate('')
            setDescription('')
        } catch (error) {
            console.log(error)
        }

    }

    return ( 
        <div className='event-container'>
        <form onSubmit={handleSubmit}>
            <label>Date
            <input type="text" value={date} onChange={handleDateChange}></input>
            </label>
            <label>Title
            <input type="text" value={title} onChange={handleTitleChange}></input>
            </label>
            <label>Description
              <input type="text" value={description} onChange={handleDescriptionChange}></input>
            </label>
            <button type='submit'>CREATE NEW EVENT</button>
           </form>
    </div>
     );
}

export default CreateEvent;


    // <div className='backboard-img backboard-container'>
    //     <div className='event-container'>
    //        <h1 className='event-title'>CREATE EVENT</h1>
    //        <div className="input-container">
    //        <p className='event-subtitles'> Event Title:</p>
    //        <input className='event-input' placeholder="Type your twitch user here..."></input>
    //        <p className='event-subtitles'> Event Date</p>
    //        <input className='event-input' placeholder="Type your password here..."></input>
    //        <p className='event-subtitles'> Event Description</p>
    //        <input className='event-input event-description-input' placeholder="Type your password here..."></input>
    //        <button  className='login-button'>CANCEL</button>
    //        <button  className='login-button'>CREATE</button>
    //        </div>
    //     </div> 
    //     </div>