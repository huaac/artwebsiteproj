import React from 'react';
import './App.css'; 
import forestbg from './img/forestbackground.jpg';

//import 'bootstrap/dist/css/bootstrap.min.css'; 

function Homepage() {
  return (
    <div className="App">
      <main>
        <div className="simple-textbtn col-sm-12" style={{
        backgroundImage: `url(${forestbg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '55vh',
      }}>
          <h2 style={{ color: 'white', textAlign: 'center', paddingTop: '150px', fontSize: '40px' }}>
            Take an art class with us!
          </h2>
          <button className="button" style={{ justifyContent: 'center' }}>
            Find a Location Near You
          </button>
        </div>

        <div className="row" style={{ marginBottom: '100px' }}>
          <div className="col-md-6 col-sm-12">
            <h3
              style={{
                fontSize: '40px',
                position: 'relative',
                paddingLeft: '50px',
                paddingBottom: '30px',
                paddingTop: '70px',
                paddingRight: '30px',
                color: '#627432',
                fontWeight: 'bold',
              }}
            >
              First art class is FREE for students ages 5-17!
            </h3>
            <p
              style={{
                position: 'relative',
                paddingLeft: '50px',
                paddingRight: '30px',
                color: '#627432',
                fontSize: '20px',
              }}
            >
              Learn how to draw anything by applying basic art techniques and advanced art techniques. Whether you are a
              beginner or a skilled artist, we provide individual art instruction for anyone with an interest in art,
              allowing you to move at your own pace and enjoy learning art every step of the way.
            </p>
            <p
              style={{
                position: 'relative',
                paddingLeft: '50px',
                color: '#627432',
                fontSize: '20px',
              }}
            >
              Learn to use mediums such as pastel, charcoal, watercolor, and oil. Classes available for adults and
              children 5+.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <h2
              style={{
                fontSize: '40px',
                position: 'relative',
                paddingBottom: '50px',
                paddingLeft: '50px',
                paddingTop: '70px',
                color: '#627432',
                fontWeight: 'bold',
              }}
            >
              Interested?
            </h2>
            <button className="button2">Find the perfect class for you!</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
