import React from 'react';
import './Team.css';

const Team = () => {
  return (
  <div className='team-container'>
    <div className='team-header'>Meet the Team</div>
    <div className='team-grid'>
        <div className="team-imgs">
          <img src="https://via.placeholder.com/500" alt="Team" className="team-img" />
          <p className="team-des">Team</p>
        </div>
        <div className="team-imgs">
          <img src="https://via.placeholder.com/500" alt="Larisse Robinson" className="team-img" />
          <p className="team-name">Larisse Robinson</p>
          <p className="team-des">La Mesa Studio Program Director</p>
        </div>
        <div className="team-imgs">
          <img src="https://via.placeholder.com/500" alt="Jessica Velazquez" className="team-img" />
          <p className="team-name">Jessica Velazquez</p>
          <p className="team-des">Santee Studio Program Director</p>
        </div>
        <div className="team-imgs">
          <img src="https://via.placeholder.com/500" alt="Jelisa Corpuz" className="team-img" />
          <p className="team-name">Jelisa Corpuz</p>
          <p className="team-des">Bonita Studio Program Director</p>
        </div>
      </div>
  </div>
  );
};

export default Team;