import React from "react";
import "../pages/Login.css";
import "../pages/Index.css";
import "./CreateEvent.css";

const CreateEvent = () => {
  return (
    <div className="">
      <div className="backboard-img backboard-container m-auto">
        <div className="">
          <h1 className="event-title">EDIT EVENT</h1>
          <div className="">
            <p className="event-subtitles text-center"> Event Title:</p>
            <input
              className="event-input"
              placeholder="Type your twitch user here..."
            ></input>
            <p className="event-subtitles text-center"> Event Date</p>
            <input
              className="event-input"
              placeholder="Type your password here..."
            ></input>
            <p className="event-subtitles text-center"> Event Description</p>
            <input
              className="event-input event-description-input"
              placeholder="Type your password here..."
            ></input>
            <br />
            <div
              className="d-flex"
              style={{
                justifyContent: "center",
                gap: 30,
              }}
            >
              <button className="login-button">CANCEL</button>
              <button className="login-button">EDIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
