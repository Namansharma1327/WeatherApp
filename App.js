import NavBar from './components/NavBar';
import Weather from './components/Weather';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


import './App.css';

function App() {
  return (
    <div className='wrapper'>
      <NavBar> </NavBar>
     
      {/* <Home></Home> */}
      {/* /* <div className="App">
       <div className='landing-text'>
        <h1>KNOW YOUR SKY, PLAN YOUR DAY</h1>
       </div>

       <div className='child'>
        <img  className='hero-pic' src='https://img.freepik.com/free-photo/scene-childhood-with-young-child_23-2150169826.jpg?t=st=1725448612~exp=1725452212~hmac=086fa8aea8613dd3966ec154d6d66e86ef6d6e4c99f54eb07cdb1f2a9c1e3cf6&w=360' height={400} ></img>
       </div>
      

      </div> */ }

      <Footer></Footer>
        
    </div>
    
    
  );
}

export default App;
