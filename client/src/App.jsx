import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signin from "./pages/Signin";

import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // TODO: Validate the token
      setLoggedIn(true);
    }
  }, []);

  // function to handle user login
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // function to handle user logout
  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <div className="view">
      <Router>
        {loggedIn && <Header handleLogout={handleLogout} />}
        <main>
          <Routes>
            {!loggedIn && <Route path="/" element={<Index />} />}

            {/* if user is not logged in, redirect to login page */}
            {!loggedIn && <Route path="*" element={<Navigate to="/Login" />} />}
            <Route
              path="/Login"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route path="/Signin" element={<Signin />} />
            {/* if user is logged in, render the different routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/Events" element={<Events />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
