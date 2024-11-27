import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import './Footer.css'

const Footer = () => {
  
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="socials-icons">
          <BsInstagram className="socials"/>
          <AiOutlineFacebook className="socials"/>
        </div>
        <div className="links">
          <p className="footer-q">FREQUENTY ASKED QUESTIONS</p>
          <p className="footer-q">BECOME AN INSTRUCTOR</p>
        </div>
      </div>
    </div>
  )
}

export default Footer