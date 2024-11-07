import React from 'react'
import './Footer.css';
import { FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
        <footer className='footer-content'>
            <div className='copyright-text'>
                <p className='p1'>© 2024 Love Weather. All rights reserved. </p>
                <p className='p2'>
                    This website and its content, including but not limited to text, graphics, logos, images, and software, are the property of love weather and are protected by international copyright laws.
                </p>
            </div>
            <div className='links'>
                <div>
                    
                   <Link to="https://www.instagram.com/accounts/login/?hl=en" > <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'height={25} width={25} ></img></Link>
                </div>
                <div>
                  
                    <Link to="https://www.facebook.com/"><img src='https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png' height={25} width={25}></img></Link>
                </div>
                <div>
                    
                    <Link to="https://github.com/"><img src='https://icons.veryicon.com/png/o/object/material_design_icons/github-circle-1.png' height={28} width={28}></img></Link>
                </div>


            </div>

        </footer>
     
      
    </div>
  )
}

export default Footer;
