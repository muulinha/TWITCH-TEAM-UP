import Logo from "../images/tup.png";
import "./Header.css";
// import "./LoginButton.css"

// var test = 'casimiro';

const Header = ({ handleLogout }) => {
  return (
    <div className="header">
      <div className="logo-navbar">
        <a href="http://localhost:3000/">
          <img className="logo" src={Logo} alt="ProfilePicture" />
        </a>
        <ul>
          <li>
            <a href="http://localhost:3000/home">HOME</a>
          </li>
          <li>
            <a href="http://localhost:3000/events">EVENTS</a>
          </li>
          <li>
            <a href="http://localhost:3000/about">ABOUT</a>
          </li>
          <li
            onClick={() => {
              handleLogout();
            }}
          >
            <a href="http://localhost:3000/">Logout</a>
          </li>
        </ul>
      </div>
      <div>
        <p style={{ fontSize: "16px" }}>
          <strong>WELCOME</strong>{" "}
        </p>
        <p style={{ fontSize: "16px" }}>
          <strong style={{ color: "orange" }}>
            {JSON.parse(localStorage.getItem("profile")).userLogin}
          </strong>
        </p>
      </div>
    </div>
  );
};

export default Header;
