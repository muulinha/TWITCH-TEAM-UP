import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    const payload = {
      email: email,
      userLogin: username,
      password: password,
    };

    axios
      .post("http://localhost:4040/api/user/register", payload)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        // Redirect to the home page
        window.location.href = "/";
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
          });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to login. Please try again.");
      });
  };

  return (
    <div className="backboard-img backboard-login">
      <h1 className="login-title">SIGNIN</h1>
      <form onSubmit={handleSubmit} className="input-container">
        <p className="login-subtitles"> Twitch User:</p>
        <input
          className="login-input"
          placeholder="Type your twitch user here..."
          value={username}
          onChange={handleUsernameChange}
        ></input>
        <p className="login-subtitles"> Email:</p>
        <input
          className="login-input"
          placeholder="Type your email here..."
          value={email}
          onChange={handleEmailChange}
        ></input>
        <p className="login-subtitles"> Password:</p>
        <input
          className="login-input"
          type="password"
          placeholder="Type your password here..."
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <p className="login-subtitles"> Confirm Password:</p>
        <input
          className="login-input"
          type="password"
          placeholder="Retype your password here..."
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        ></input>
        <br />
        <div className="text-center">
          <button type="submit" className="login-button">
            REGISTER
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;

//     return (

//         <div>

//             document.addEventListener("DOMContentLoaded", () => {
//             const loginForm = document.querySelector("#login");
//             const createAccountForm = document.querySelector("#createAccount");

//             document
//               .querySelector("#linkCreateAccount")
//               .addEventListener("click", (e) => {
//                 e.preventDefault();
//                 loginForm.classList.add("hidden");
//                 createAccountForm.classList.remove("hidden");
//               });

//             document.querySelector("#linkLogin").addEventListener("click", (e) => {
//               e.preventDefault();
//               loginForm.classList.remove("hidden");
//               createAccountForm.classList.add("hidden");
//             });

//             loginForm.addEventListener("submit", (e) => {
//               e.preventDefault();

//               const username = document.querySelector('#userLogin').value.trim();
//               const password = document.querySelector('#userPassword').value.trim();

//               // perform Fetch API login
//               console.log("user_name:", username);
//               console.log("password:", password);

//               fetch('/api/users/login', {
//                 method: "POST",
//                 body: JSON.stringify({
//                   user_name: username,
//                   password: password
//                 }),
//                 headers: {
//                   "Content-type": "application/json"
//                 }
//               })
//                 .then((response) => response.json())
//                 .then((data) => {
//                   if (data.success) {
//                     setFormMessage(loginForm, "success", "Login successful");
//                     window.location.replace("/main");
//                   } else {
//                     setFormMessage(loginForm, "error", "Invalid username or password");
//                   }
//                 })
//                 .catch((err) => {
//                   console.log(err);
//                   setFormMessage(loginForm, "error", "Error logging in");
//                 });
//             });

//             // Checks whether an email or username is in user before allowing a user to create a new account
//             createAccountForm.addEventListener("submit", (e) => {
//               e.preventDefault();

//               const newUsername = document.querySelector("#signinUsername").value.trim();
//               const newUserEmail = document.querySelector("#signinEmail").value.trim();
//               const newUserPwd = document.querySelector("#signinConfirmPassword").value.trim();

//               fetch('/api/users', {
//                 method: "GET"
//               })
//               .then(function(response){
//                 return response.json();
//               })
//               .then(function(data) {
//                 if(!data){
//                   validNewUser(newUsername, newUserEmail, newUserPwd);
//                 } else {
//                   const validationData = data.map((user) => {
//                     return {
//                       user_name: user.user_name,
//                       email: user.email
//                     }
//                   });

//                   if (validationData.filter(x => x.user_name === newUsername).length > 0){
//                     setFormMessage(createAccountForm, "error", "Username already in use");
//                     return;
//                   } else if (validationData.filter(x => x.email === newUserEmail).length > 0) {
//                     setFormMessage(createAccountForm, "error", "Email already in use");
//                     return;
//                   } else {
//                     validNewUser(newUsername, newUserEmail, newUserPwd);
//                   }
//                 }
//               })
//               .catch((err) => {
//                 console.log(err);
//                 setFormMessage(createAccountForm, "error", "Error validating credentials");
//               });
//             });

//             // Once user data is validated against the database, the data is stored in the database as a new account
//             const validNewUser = (userName, email, password) => {
//               fetch('/api/users', {
//                 method: "POST",
//                 body: JSON.stringify({
//                   user_name: userName,
//                   email: email,
//                   password: password
//                 }),
//                 headers: {
//                   "Content-type": "application/json"
//                 }
//               })
//               .then((response) => response.json())
//               .then((data) => {
//                 if (data.success) {
//                   setFormMessage(createAccountForm, "success", "New user successfully created");
//                   window.location.replace("/main");
//                 } else {
//                   setFormMessage(createAccountForm, "error", "Unsuccessful in creating a new user account.");
//                 }
//               })
//               .catch((err) => {
//                 console.log(err);
//                 setFormMessage(createAccountForm, "error", "Error creating new user account");
//               });
//             }

//             // Validtions for user input in the Signin form
//             const submitButton = document.querySelector("#submit-button");
//             document.querySelectorAll(".form-input").forEach((inputElement) => {
//               inputElement.addEventListener("blur", (e) => {
//                 if (
//                   (e.target.id === "signinUsername" &&
//                     (e.target.value.length < 5 || e.target.value.length > 15 || invalidUserName(e.target.value))) ||
//                   (e.target.id === "signinEmail" && !isValidEmail(e.target.value)) ||
//                   (e.target.id === "signinPassword" &&
//                     (e.target.value.length < 8 || e.target.value.length > 20)) ||
//                   (e.target.id === "signinConfirmPassword" &&
//                     e.target.value !== document.querySelector("#signinPassword").value)
//                 ) {
//                   if (e.target.id === "signinUsername") {
//                     setInputError(
//                       inputElement,
//                       "Username must be between 5 - 15 characters in length without any spaces."
//                     );
//                   } else if (e.target.id === "signinEmail") {
//                     setInputError(inputElement, "Please enter a valid email address.");
//                   } else if (e.target.id === "signinPassword") {
//                     setInputError(
//                       inputElement,
//                       "Password must be between 8 - 20 characters in length."
//                     );
//                   } else {
//                     setInputError(inputElement, "Passwords do not match.");
//                   }
//                   submitButton.disabled = true;
//                 } else {
//                   submitButton.disabled = false;
//                 }

//                 inputElement.addEventListener("input", (e) => {
//                   clearInputError(inputElement);
//                 });
//               });
//             });

//             function isValidEmail(email) {
//               // Regular expression to match email format
//               const emailRegex = /\S+@\S+\.\S+/;
//               return emailRegex.test(email);
//             }

//             // RegEx to make sure there are no spaces in a new username
//             function invalidUserName(userName) {
//             const userNameRegex = /[^\S]/g;
//               return userNameRegex.test(userName);
//             }
//         });
//         </div>

//     )
//     };

// export default Signin;
