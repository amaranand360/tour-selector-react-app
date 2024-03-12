import React from "react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Qr from "../assets/qr.png";

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="social-links ">
        <h3 className="footer-mid-text">Get Connected </h3>
        <FaFacebook className="footer-icon" />
        <FaTwitter className="footer-icon" />
        <FaYoutube className="footer-icon" />
        <FaInstagram className="footer-icon" />
      </div>
      <div className="footer-mid-text">
        <span className="footer-text-l">Created by @username </span>
        <br />
        <span className="footer-text-l">Made with ❤️ by the Tech Tribe </span>
        <span>
          <br /> Note: This project is made for educational purposes only.
        </span>
      </div>
      <div className="qr-div">
        <img src={Qr} alt="qr" className="qr-img" />
        <div className="scan-text">
          <span>Scan for live prototype!</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
