import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      setUsernameError("Please enter a username");
    }
    if (!password) {
      setPasswordError("Please enter a password");
    }
    if (username && password) {
      // Handle form submission here
      console.log("Form submitted");
    }
    const payload = {
      userLogin: username,
      password: password,
    };

    axios
      .post("http://localhost:4040/api/user/login", payload)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        // Make another API request to get the user profile
        axios
          .get("http://localhost:4040/api/user/getProfile", {
            headers: { Authorization: `Bearer ${response.data.token}` },
          })
          .then((profileResponse) => {
            localStorage.setItem(
              "profile",
              JSON.stringify(profileResponse.data)
            );
            // Redirect to the home page
            window.location.href = "/home";
          })
          .catch((error) => {
            console.log(error);
            alert("Failed to get user profile.");
          });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to login. Please try again.");
      });
  };

  return (
    <div className="login-container">
      <div className="backboard-img backboard-login">
        <h1 className="login-title">LOGIN </h1>
        <form onSubmit={handleSubmit}>
          <p className="login-subtitles text-center"> Twitch User:</p>
          <input
            className="login-input"
            placeholder="Type your twitch user here..."
            value={username}
            onChange={handleUsernameChange}
          />
          {usernameError && <p className="error-message">{usernameError}</p>}
          <p className="login-subtitles"> Password:</p>
          <input
            className="login-input"
            placeholder="Type your password here..."
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
          <div className="text-center">
            <br />
            <button className="login-button">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
