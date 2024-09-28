import React from 'react';
import './App.css'; // Your custom CSS
//import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from "./img/awlHeaderLogo.gif"
import forestbg from "./img/forestbackground.jpg"
import navbtn from "./img/navbtn.png"

import { Carousel } from "./Carousel";
//import { RadioButton } from "./index.css"; //import(url)
//import("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0");

function App() {



    const handleClick = () => {
        console.log("button is clicked");
    };

    function openNav() {
        document.getElementById("olNav").style.height = "100%";
    }

    function closeNav() {
        document.getElementById("olNav").style.height = "0%";
    }

  return (

    <div className="landing-page">
        <nav className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="Header Logo" className="header-logo"/>
            </div>

            <button type="button" className="navbar-toggler justify-content-between" onClick={openNav}>
                <img src={navbtn} className="navbar-toggler-icon"/>
            </button>


            <div className="navbar-right">
                <ul className="nav-links header-nav-list">
                    <li className="header-nav-item">
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Locations</a>
                    </li>
                    <li>
                        <a href="/">Team</a>
                    </li>
                    <li>
                        <a href="/">Services</a>
                    </li>
                    <li>
                        <a href="/">Gallery</a>
                    </li>
                    <li>
                        <a href="/">FAQ</a>
                    </li>
                </ul>
            </div>
        </nav>

        <div id="olNav" className="overlay">
            <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
            <div className="overlay-content">
                <a href="/">Home</a>
                <a href="/">Locations</a>
                <a href="/">Team</a>
                <a href="/">Services</a>
                <a href="/">Gallery</a>
                <a href="/">FAQ</a>
            </div>
        </div>

        <main>
            <div className="simple-textbtn forestbg">
                <h2 style={{ color: 'white', textAlign: 'center', paddingTop: '150px', fontSize: '40px' }}>
                    Take an art class with us!
                </h2>
                <button className="button" style={{ justifyContent: 'center' }}>Find a Location Near You </button>
            </div>

            <div className="infoandbutton" style={{flexDirection:'row'}}>
                <div className="info" style={{flexDirection:'column', flex: '3'}}>
                    <h2 className="bolded" style={{fontSize: '40px', position: 'relative', paddingLeft: '50px', paddingBottom: '30px', paddingTop:'70px', paddingRight: '30px', color: '#627432', fontWeight: 'bold',}}>
                        First art class is FREE for students ages 5-17!
                    </h2>
                    <p className="regtxt">
                        Learn how to draw anything by applying basic art techniques and advanced art techniques. Whether you are a
                        beginner or a skilled artist, we provide individual art instruction for anyone with an interest in art,
                        allowing you to move at your own pace and enjoy learning art every step of the way.
                    </p>
                    <p className="regtxt">
                        Learn to use mediums such as pastel, charcoal, watercolor, and oil. Classes available for adults and children 5+.
                    </p>
                </div>
                <div className="info" style={{flexDirection:'column',  flex: '3'}}>
                    <h2 className="bolded" style={{ fontSize: '40px', position: 'relative', paddingBottom: '50px',paddingLeft: '50px',paddingTop: '70px',color: '#627432',fontWeight: 'bold',}}> Interested? </h2>
                    <button class="button2">Find the perfect class for you!</button>
                </div>
            </div>

            <div className="carouselgallery">
                <div className="info" style={{textAlign:'center'}}>
                    <h2 className="bolded" style={{color:'white', fontSize: '40px', paddingTop: '50px'}}>Check out some of our amazing artists!</h2>
                </div>
                <div>
                    <div className="carousel-alignment"><Carousel /></div>
                </div>
            </div>

        </main>
    </div>

//    <div className="App">
//      <header className="row navbar-expand-md navbar">
//        <div className="col-6">
//          <img src={logo} alt="Header Logo" className="header-logo" />
//        </div>
//
//        <button
//          type="button"
//          className="navbar-toggler justify-content-between col-2"
//          data-bs-toggle="collapse"
//          data-bs-target="#navbarCollapse"
//          aria-expanded="false"
//          aria-controls="collapseExample"
//        >
//          <span className="navbar-toggler-icon"></span>
//        </button>
//
//        <div className="header-nav-wrapper collapse navbar-collapse ms-auto col-6" id="navbarCollapse">
//          <nav className="header-nav-list">
//            <div className="header-nav-item">
//              <a href="/">Home</a>
//            </div>
//            <div className="header-nav-item dropdown">
//              <a href="/location-page">Locations</a>
//              <div className="dropdown-content">
//                <a href="#">Link 1</a>
//                <a href="#">Link 2</a>
//                <a href="#">Link 3</a>
//              </div>
//            </div>
//            <div className="header-nav-item">
//              <a href="/team">Team</a>
//            </div>
//            <div className="header-nav-item">
//              <a href="/services">Services</a>
//            </div>
//            <div className="header-nav-item">
//              <a href="/faq">FAQ</a>
//            </div>
//          </nav>
//        </div>
//      </header>
//
//      <main>
//        <div className="simple-textbtn forestbg col-sm-12">
//          <h2 style={{ color: 'white', textAlign: 'center', paddingTop: '150px', fontSize: '40px' }}>
//            Take an art class with us!
//          </h2>
//          <button className="button" style={{ justifyContent: 'center' }}>
//            Find a Location Near You
//          </button>
//        </div>
//
//        <div className="row" style={{ marginBottom: '100px' }}>
//          <div className="col-md-6 col-sm-12">
//            <h3
//              style={{
//                fontSize: '40px',
//                position: 'relative',
//                paddingLeft: '50px',
//                paddingBottom: '30px',
//                paddingTop: '70px',
//                paddingRight: '30px',
//                color: '#627432',
//                fontWeight: 'bold',
//              }}
//            >
//              First art class is FREE for students ages 5-17!
//            </h3>
//            <p
//              style={{
//                position: 'relative',
//                paddingLeft: '50px',
//                paddingRight: '30px',
//                color: '#627432',
//                fontSize: '20px',
//              }}
//            >
//              Learn how to draw anything by applying basic art techniques and advanced art techniques. Whether you are a
//              beginner or a skilled artist, we provide individual art instruction for anyone with an interest in art,
//              allowing you to move at your own pace and enjoy learning art every step of the way.
//            </p>
//            <p
//              style={{
//                position: 'relative',
//                paddingLeft: '50px',
//                color: '#627432',
//                fontSize: '20px',
//              }}
//            >
//              Learn to use mediums such as pastel, charcoal, watercolor, and oil. Classes available for adults and
//              children 5+.
//            </p>
//          </div>
//          <div className="col-md-6 col-sm-12">
//            <h2
//              style={{
//                fontSize: '40px',
//                position: 'relative',
//                paddingBottom: '50px',
//                paddingLeft: '50px',
//                paddingTop: '70px',
//                color: '#627432',
//                fontWeight: 'bold',
//              }}
//            >
//              Interested?
//            </h2>
//            <button className="button2">Find the perfect class for you!</button>
//          </div>
//        </div>
//      </main>
//    </div>
  );
}

export default App;
