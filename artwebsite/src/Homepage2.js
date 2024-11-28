import React from 'react';
import './Homepage2.css';
import LocationCards from './LocationCards';
import Slides from './Slide'
import Footer from './Footer'
import Mission from './Mission'

const Homepage2 = () => {
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <div className='homepage'>
      <div className='carousel'>  
        <Slides slides={SLIDES} options={OPTIONS} />
      </div>
      <div className='mission'>
        <Mission />
      </div>
      <div className='line-container'>
        <div className='line'></div>
      </div>
      <div className='locations'>
        <LocationCards />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Homepage2;