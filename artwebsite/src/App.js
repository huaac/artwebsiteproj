import React from 'react';
import './App.css'; // Your custom CSS
//import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from "./img/awlHeaderLogo.gif"

function App() {
  return (
    <div className="App">
      <header className="row navbar-expand-md navbar">
        <div className="col-6">
          <img src={logo} alt="Header Logo" className="header-logo" />
        </div>

        <button
          type="button"
          className="navbar-toggler justify-content-between col-2"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="header-nav-wrapper collapse navbar-collapse ms-auto col-6" id="navbarCollapse">
          <nav className="header-nav-list">
            <div className="header-nav-item">
              <a href="/">Home</a>
            </div>
            <div className="header-nav-item dropdown">
              <a href="/location-page">Locations</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <div className="header-nav-item">
              <a href="/team">Team</a>
            </div>
            <div className="header-nav-item">
              <a href="/services">Services</a>
            </div>
            <div className="header-nav-item">
              <a href="/faq">FAQ</a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div className="simple-textbtn forestbg col-sm-12">
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

export default App;
