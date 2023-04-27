import Logo from '../images/tup.png';
import "./Header.css"
// import "./LoginButton.css"

// var test = 'casimiro';


const Header = () => {
  

  return (
    <div className='header'>
      <div className='logo-navbar'>
        <a href="http://localhost:3000/">
         <img className='logo' src={Logo} alt="ProfilePicture" />
         </a>
        <ul>
          <li><a href="http://localhost:3000/Home">HOME</a></li>
          <li><a href="http://localhost:3000/events">EVENTS</a></li>
          <li><a href="http://localhost:3000/about">ABOUT</a></li>
        </ul>
      </div>
      
    </div>
  );
};

export default Header;