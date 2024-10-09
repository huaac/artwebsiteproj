import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Locations.css';
import LaMesa from './LaMesa';
import Santee from './Santee';
import Bonita from './Bonita';
import lamesafront from './img/lamesafront.jpg';
import santeefront from './img/santeeimg.jpg';
import bonitafront from './img/bonitaimg.jpeg';

const Locations = () => {
  let navigate = useNavigate();

  const guidelines = () => {
    navigate('/Guidelines');
  };

  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className='locations-container'>
      <div className='advertise'>
        <h2>
          Call us today to schedule a free introductory art lesson!
        </h2>
        <h3>
          (Only applicable to new students ages 5-17)
        </h3>
      </div>

      <div className='guidelines'>
        <h2>
          We strive to provide a safe environment for all students. 
          <br />Please take a look at our studio safety guidelines.
        </h2>
        <button className="guidelines-button" onClick={guidelines}>
          <span>Safety Guidelines</span>
          <span className="dropdown">+</span>
        </button>
      </div>

      <div className='money'>
        <div className='tuition'>
          <h2>Need to Pay Tuition?</h2>
          <button className='money-tuition' onClick={() => window.location.href='https://artwithlarisse.square.site/shop/pay-tuition/2'}>
            Pay Tuition
          </button>
        </div>
        <div className='supplies'>
          <h2>Need more Art Supplies?</h2>
          <button className='money-supplies' onClick={() => window.location.href='https://artwithlarisse.square.site/shop/art-supplies/7'}>Purchase Art Supplies</button>
        </div>
      </div>

      <h2 className='location-header'>We have 3 locations in San Diego locations: </h2>
      <div className='location-tabs'>
        <div className='button-tabs'>
          <button
            className={toggle === 1 ? 'tab active' : 'tab'}
            onClick={() => toggleTab(1)}
          >
            La Mesa
          </button>
          <button
            className={toggle === 2 ? 'tab active' : 'tab'}
            onClick={() => toggleTab(2)}
          >
            Bonita
          </button>
          <button
            className={toggle === 3 ? 'tab active' : 'tab'}
            onClick={() => toggleTab(3)}
          >
            Santee
          </button>
        </div>

        <div className='location-info'>
          {toggle === 1 && (
            <div className='content'>
              <div className='group'>
                <div className='info'>
                  <h2>La Mesa</h2>
                  <p>6119 Lake Murray Blvd, La Mesa, CA 91942</p>
                  <p>(619) 857-1270</p>
                  <div className='tuition-container'>
                    <button className='tuition-btn' onClick={() => window.location.href='https://artwithlarisse.square.site/shop/pay-tuition/2'}>Pay Tuition</button>
                  </div>
                </div>
                <div className='front'>
                  <img src={lamesafront} alt="La Mesa Front" />
                </div>
              </div>
                <h3>Schedule</h3>
                <p className="guideline-link" onClick={guidelines}>Studio Safety Guidelines</p>
                <div className='studio'>
                  <LaMesa  />
                </div>
            </div>
          )}
          {toggle === 2 && (
            <div className='content'>
            <div className='group'>
              <div className='info'>
                <h2>Bonita</h2>
                <p>4510 Bonita Road, Bonita, CA 91902</p>
                <p>(619) 508-1299</p>
                <div className='tuition-container'>
                  <button className='tuition-btn' onClick={() => window.location.href='https://artwithlarisse.square.site/shop/pay-tuition/2'}>Pay Tuition</button>
                </div>
              </div>
              <div className='front'>
                <img src={bonitafront} alt="Bonita Front" />
              </div>
            </div>
              <h3>Schedule</h3>
              <p className="guideline-link" onClick={guidelines}>Studio Safety Guidelines</p>
              <div className='studio'>
                <Bonita  />
              </div>
          </div>
          )}
          {toggle === 3 && (
            <div className='content'>
            <div className='group'>
              <div className='info'>
                <h2>Santee</h2>
                <p>9225 Carlton Hills Blvd, Ste. 5, Santee, CA 92071</p>
                <p>(619) 855-2787</p>
                <div className='tuition-container'>
                  <button className='tuition-btn' onClick={() => window.location.href='https://artwithlarisse.square.site/shop/pay-tuition/2'}>Pay Tuition</button>
                </div>
              </div>
              <div className='front'>
                <img src={santeefront} alt="Santee Front" />
              </div>
            </div>
              <h3>Schedule</h3>
              <p className="guideline-link" onClick={guidelines}>Studio Safety Guidelines</p>
              <div className='studio'>
                <Santee  />
              </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Locations;
