import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Locations.css';
import LaMesa from './LaMesa';

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
    <div>
      <div className='advertise'>
        <h2 style={{ color: 'black', textAlign: 'center', paddingTop: '150px', fontSize: '30px' }}>
          Call us today to schedule a free introductory art lesson!
        </h2>
        <h3 style={{ color: 'black', textAlign: 'left', paddingTop: '15px', paddingLeft: '22px', fontSize: '20px' }}>
          (Only applicable to new students ages 5-17)
        </h3>
      </div>

      <div className='guidelines'>
        <h2 style={{ color: 'black', textAlign: 'center', paddingTop: '150px', fontSize: '30px' }}>
          We strive to provide a safe environment for all students. Please take a look at our studio safety guidelines.
        </h2>
        <button onClick={guidelines}>Safety Guidelines</button>
      </div>

      <div className='money'>
        <div className='tuition'>
          <h2 style={{ color: 'black', textAlign: 'center', paddingTop: '150px', fontSize: '30px' }}>
            Need to Pay Tuition?
          </h2>
          <button>Pay Tuition</button>
        </div>

        <div className='supplies'>
          <h2 style={{ color: 'black', textAlign: 'center', paddingTop: '150px', fontSize: '30px' }}>
            Need more Art Supplies?
          </h2>
          <button>Purchase Art Supplies</button>
        </div>
      </div>

      <h2>We have 3 locations in San Diego locations: </h2>
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
              <h2>La Mesa</h2>
              <p>Address: 123 La Mesa Blvd, La Mesa, CA 91942</p>
              <p>Phone: (555) 123-4567</p>
              <button>Pay Tuition</button>
              <h3>Schedule</h3>
              <p onClick={guidelines}>Studio Safety Guidelines</p>
              <LaMesa/>
            </div>
          )}
          {toggle === 2 && (
            <div className='content'>
              <h2>Bonita</h2>
              <p>Address: 456 Bonita Ave, Bonita, CA 91902</p>
              <p>Phone: (555) 987-6543</p>
              <button>Pay Tuition</button>
              <h3>Schedule</h3>
              <p onClick={guidelines}>Studio Safety Guidelines</p>
            </div>
          )}
          {toggle === 3 && (
            <div className='content'>
              <h2>Santee</h2>
              <p>Address: 789 Santee Rd, Santee, CA 92071</p>
              <p>Phone: (555) 654-3210</p>
              <button>Pay Tuition</button>
              <h3>Schedule</h3>
              <p onClick={guidelines}>Studio Safety Guidelines</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Locations;
