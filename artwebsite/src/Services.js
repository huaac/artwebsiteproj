import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';
import SummerCamp from './SummerCamp';

const Services = () => {
  let navigate = useNavigate();

  const guidelines = () => {
    navigate('/Guidelines');
  };
  return (
    <div className='services-container'>
      <div className='art-class-container'>
        <p className='services-header'>Art Class</p>
        <p className="services-guideline-link" onClick={guidelines}>Studio Safety Guidelines</p>
          <div className='tuition-info'>
            <p>Tuition</p>
            <ul>
              <li>$24 per class</li>
              <li>Classes pay per month</li>
            </ul>
          </div>
          <div className='adult-info'>
            <p>Adult Art Class</p>
            <ul>
              <li>Students must be at least 13 years of age to attend</li>
              <li>Only available at the La Mesa studio on Tuesday nights.</li>
              <li>Call 619-857-1270 to inquire.</li>
            </ul>
          </div>
          <div className='family-info'>
            <p>Family Discount</p>
            <p className='starred'>To receive the family discount a full month's tuition must be paid</p>
              <ul>
                <li>1st student pays full price, 10% off the 2nd student</li>
                <li>1st and 2nd pay full price and 50% off the 3rd student.</li>
              </ul>
          </div>
          <div className='commitment-info'>
            <p>Commitment Discount</p>
              <p className='starred'>Cannot be combined with the family discount</p>
                <ul>
                  <li>Pay for 3 months at a time you can get the classes for $22 per class.</li>
                </ul>
          </div>
          <div className='referral-info'>
            <p>Refer a friend program</p>
              <ul>
                <li>Each person who signs up for at least one month (not including their free art lesson), you get a free art lesson! </li>
                <li>There's no limit on how many free art lessons you can earn.There's no limit on how many free art lessons you can earn.</li>
              </ul>
          </div>
      </div>
      <div className='birthday-container'>
        <p className='services-header'>Birthday Party</p>
        <p> We offer an unique birthday experience for the birthday guest of honor. 
          We provide art lessons for the birthday guest of honor and all of their friends! 
          There are creative birthday games as well! 
          Contact us today for booking and more information!
        </p>
        <div className='contact-info'>
          <p>artwithlarisse@gmail.com</p>
          <p>(619) 857-1270</p>
        </div>
      </div>
      <div className='camp-container'>
        <p className='services-header'>Summer Camp</p>
        <div className='current'>
          <p>Summer Art Camps 2024</p>
          <p className='starred'>All Summer camps for 2024 have sold out.</p>
          <p className='starred'>Please look for 2025 summer art camp schedule next February.</p>
        </div>
        <div className='camp-info'>
          <p>Camps are for 4 days from 10am and lasts until 1pm.
            We will still have afternoon classes during camp weeks. 
            All the supplies are included as well as snacks. 
            Please don't wait to reserve your spot in camp as spots fill up very fast. 
            If a certain camp you want is full, reach out to us to be put on a waiting list. Friendly reminder, that our regular art classes are held all year long.
          </p>
        </div>
        <div className='tuition-info'>
          <p>Tuition</p>
            <ul>
              <li>$190 per class</li>
              <li>Full payment is needed for reservation</li>
              <li>Email us with which camp/studio you are interested in to reserve your spot</li>
            </ul>
        </div>
        <div className='summer-schedule'>
          <SummerCamp />
        </div>
      </div>
    </div>
  );
};

export default Services;