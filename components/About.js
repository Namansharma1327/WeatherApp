import React from 'react'
import './About.css';

function About() {
  return (
    <div className='about-page'>
      <div className='intro-header'>
        <p>Introduction to Love Weather</p>
      </div>
      <div className='intro-content'>
        <div className='intro-para'>
        <p>Welcome to LOVE WEATHER, your all-in-one destination for real-time weather updates and forecasts! Our website is designed to provide you with the most accurate and up-to-date weather information, helping you stay prepared for every season. Whether you're checking today’s forecast, planning an outdoor event, or simply curious about the weather in your area, Love Weather makes it easy to access reliable data at your fingertips. From local weather reports to global climate patterns, we are here to ensure you are always informed and ready for whatever the sky has in store!</p>
        </div>
        <div className='image'>
          <img src='https://cdnwebsite.databox.com/wp-content/uploads/2020/12/01062702/about-us-page-examples.png' height={400} width={350}></img>
        </div>
      </div>
      
    </div>
  )
}

export default About;
