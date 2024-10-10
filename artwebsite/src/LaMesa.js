import React from 'react';
import './LaMesa.css'; 

const LaMesa = () => {
  return (
    <div className="schedule">
      <div className="day">Monday</div>
      <div className='time'>3:00 - 4:15</div>
      <div className='time'>4:30 - 5:45</div>
      <div className='time'>6:00 - 7:15</div>
      <div className='time'></div>
      <div className='time'></div>

      <div className="day">Tuesday</div>
      <div className='time'>9:00 - 10:15 AM</div>
      <div className='time'>10:30 - 11:45 AM</div>
      <div className='time'>3:00 - 4:15</div>
      <div className='time'>4:30 - 5:45</div>
      <div className='time'>6:00 - 8:30 PM <br /> Every other week, Adult class</div>

      <div className="day">Wednesday</div>
      <div className='time'>3:00 - 4:15</div>
      <div className='time'>4:30 - 5:45</div>
      <div className='time'></div>
      <div className='time'></div>
      <div className='time'></div>

      <div className="day">Thursday</div>
      <div className='time'>3:00 - 4:15</div>
      <div className='time'>4:30 - 5:45</div>
      <div className='time'>6:00 - 7:15</div>
      <div className='time'></div>
      <div className='time'></div>

      <div className="day">Friday</div>
      <div className='time'>3:15 - 4:30</div>
      <div className='time'>4:45 - 6:00</div>
      <div className='time'></div>
      <div className='time'></div>
      <div className='time'></div>

      <div className="day">Saturday</div>
      <div className='time'>9:00 - 10:15 AM</div>
      <div className='time'>10:30 - 11:45 AM</div>
      <div className='time'>12:00 - 1:15</div>
      <div className='time'></div>
      <div className='time'></div>
    </div>
  );
};

export default LaMesa;
