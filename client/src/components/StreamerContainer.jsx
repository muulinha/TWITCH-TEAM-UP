import React from "react";
import "./StreamerContainer.css";
// import Button from '../components/Button'

// needs to figure out how to bring the data from the API

const StreamerContainer = () => {
  const layout = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    // [10, 11, 12],
    // [13, 14, 15],
    // [16, 17, 18],
    // [19, 20, 21],
    // [22, 23, 24],
    // [25, 26, 27],
    // [28, 29, 30],
  ];
  return (
    <div id="streamer-container" className="streamer-container">
      <>
        {layout.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {[0, 2, 13, 123, 213, 12].map((col, colIndex) => (
              <div className="col" key={colIndex}>
                <div className="d-flex gap-3">
                  <div
                    id="profile_image_url"
                    className="streamer-profile-picture"
                  >
                    {/* <img src="../images/twitch-logo-png-1858.png" alt="Profile Picture" /> */}
                  </div>
                  <div className="streamer-name-game-container">
                    <div id="display-name" className="streamer-display-name">
                      muulinha
                    </div>
                    <div id="game-name" className="streamer-game-name">
                      Counter-Strike
                    </div>
                  </div>
                  <div id="type" className="streamer-status online"></div>
                  <div id="viewer-count" className="streamer-viewer_count">
                    123412
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </>

      {/* <Button>INVITE <br></br>PLAY </Button> */}
    </div>
  );
};

export default StreamerContainer;
