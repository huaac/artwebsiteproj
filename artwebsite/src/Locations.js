import React from 'react';
import { useNavigate } from 'react-router-dom';

const Locations = () => {
  let navigate = useNavigate();

  const guidelines = () => {
    navigate('/Guidelines');
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
             We strive to provide a safe environment for all students.
             Please take a look at our studio safety guidelines.
        </h2>
        <button onClick={guidelines}>Safety Guidelines</button>
      </div>

      <div className='money'>
        <div className='tuition'>
          <h2 style={{ color: 'black', textAlign: 'center', paddingTop: '150px', fontSize: '30px' }}>
                Need to Pay Tuition?
          </h2>
          <button>
            Pay Tuition
          </button>
        </div>

        <div className='supplies'>
          <h2 style={{ color: 'black', textAlign: 'center', paddingTop: '150px', fontSize: '30px' }}>
                Need more Art Supplies?
          </h2>
          <button>
            Purchase Art Supplies
          </button>
        </div>
      </div>

      <div className='location-tabs'>
        <button>
          La Mesa
        </button>
        <button>
          Bonita
        </button>
        <button>
          Santee
        </button>
      </div>
    </div>
  );
};

export default Locations;