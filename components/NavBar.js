import React from 'react'
import './NavBar.css';
import { TiWeatherPartlySunny } from "react-icons/ti";
import { NavLink } from 'react-router-dom';
import Weather from './Weather';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import App from '../App';

function NavBar() {
  return (
    <div>
        <nav className='navbar'>
                <div className='logo'></div>
                <div className='logo-title'> Love Weather</div>


                <div className='nav-components'>
                <ul className='list-items'>
                    <li className='li'>
                      <NavLink to="/home">Home</NavLink>
                    </li>
                    <li className='li'>
                      <NavLink to="/weather">Fetch weather</NavLink>
                    </li>
                    <li className='li'>
                      <NavLink to="/about">About</NavLink>
                    </li>
                </ul>
                </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}>Home</Route>
          <Route path="/weather" element={<Weather></Weather>}></Route>
          <Route path="/about" element={<About></About>}>About</Route>
        </Routes>
   

    
    </div>
  )
}

export default NavBar;
