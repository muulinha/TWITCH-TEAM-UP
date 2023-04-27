import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';
import Events from './pages/Events';
import Index from './pages/Index';
import Login from './pages/Login';
import Signin from './pages/Signin';


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import './App.css';

function App() {
  return (
    <div className='view'>
    <Router>
      
    <div className="my-component"></div>
      <Header />
      <main>
        <Routes>
        <Route exact path="/Index" element={<Index/>}/>
       
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/Signin" element={<Signin/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/Events" element={<Events/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route path="*" element={<Index/>}/> 
        </Routes>
      </main>
  </Router>
  </div>
  );
};

export default App;

