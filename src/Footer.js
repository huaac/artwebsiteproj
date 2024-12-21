import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import './Footer.css'
import paintbrush from "./img/paintbrush.png";

const Footer = () => {
  
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="socials-icons">
          <p className="gallery-text">SOCIAL MEDIA GALLERY: </p>
          <BsInstagram className="socials"/>
          <AiOutlineFacebook className="socials"/>
        </div>
        <div className="links">
          <p className="footer-q">FREQUENTLY ASKED QUESTIONS</p>
        </div>
        <div className="paintbrush-img">
        </div>
      </div>
    </div>
  )
}

export default Footer