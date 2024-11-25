import React from "react";
import './LocationCards.css';
import lamesafront from "./img/lamesafront.jpg"
import santeefront from "./img/santeeimg.jpg"
import bonitafront from "./img/bonitaimg.jpeg"

const LocationCards = () => {
  return (
    <div id="projects"className="locations-section">
      <div className="locations-title">
        <p>We Have 3 Locations In San Diego</p>
      </div>
      <div className="card-section">
        <div className="card"> 
          <div className="card-inner">
            <div className="card-front">
              <p>La Mesa</p>
              <p className="studio">Studio</p>
              <img src={lamesafront} className="studioimg"></img>
            </div>
            <div className="card-back">
              <h3>Address</h3>
              <p>6119 Lake Murray Blvd. CA 91942</p>
              <h3>Contact Information</h3>
              <span>(619) 857-1270 </span>
              <span>artwithlarisse@gmail.com</span>
              <button className="studio-page-link">Learn More</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
            <p>Bonita</p>
              <p className="studio">Studio</p>
              <img src={bonitafront} className="studioimg"></img>
            </div>
            <div className="card-back">
              <h3>Address</h3>
              <p>9225 Carlton Hills Blvd, Ste. 5 Santee, CA 92071</p>
              <h3>Contact Information</h3>
              <span>(619) 855 - 2787 </span>
              <span>artwithlarisse@gmail.com</span>
              <button className="studio-page-link">Learn More</button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>Santee</p>
              <p className="studio">Studio</p>
              <img src={santeefront} className="studioimg"></img>
            </div>
            <div className="card-back">
              <h3>Address</h3>
              <p>4510 Bonita Road Bonita, CA 91902</p>
              <h3>Contact Information</h3>
              <span>(619) 508-1299 </span>
              <span>artwithlarisse@gmail.com</span>
              <button className="studio-page-link">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCards;
