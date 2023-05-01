import "./Index.css";
import React, { useState, useEffect } from "react";
import LogoUP from "../images/team-up-logo.png";

function Index() {
  const [access_token, setAccessToken] = useState(null);

  function fetchToken() {
    return new Promise((resolve, reject) => {
      fetch("https://id.twitch.tv/oauth2/token", {
        method: "POST",
        body: new URLSearchParams({
          client_id: "jquyrmsglhfh8ttqvfgv2yw4ad2z4n", // variavel do client_id de dev da twitch
          client_secret: "o39g6x2urddytn5kayr0zy88v27h28", // variavel do client_secret de dev da twitch
          grant_type: "client_credentials",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setAccessToken(data.access_token);
          console.log("test" + data.access_token);
          resolve(data.access_token);
        })
        .catch((err) => {
          console.error(err);
          reject(err);
        });
    });
  }

  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <div className="main-container">
      <img className="logoUP" src={LogoUP} alt="ProfilePicture" />
      <p className="description-text">
        A platform totally free and ready to take your live stream to the next
        level.
        <br></br>
        Team up with your friends and have fun!
      </p>
      <div className="buttons-container">
        <div className="d-flex">
          <a href="./login">
            <button className="login-button">LOGIN</button>
          </a>

          <a href="./signin">
            <button className="login-button">SIGNIN</button>
          </a>
        </div>
      </div>
      {/* Pass the access_token value to child components as props */}
    </div>
  );
}

export default Index;
