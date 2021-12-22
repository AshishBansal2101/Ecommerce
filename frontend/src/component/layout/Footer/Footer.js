import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App from Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>B2Me</h1>
        <p>High Quality is our first priority</p>

        <p>Copyright 2021 &copy; Ashish</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com">Instagram</a>
        <a href="https://www.linkedin.com/in/ashish-bansal-b43b60192/">
          LinkedIn
        </a>
        <a href="https://github.com/AshishBansal2101">Github</a>
      </div>
    </footer>
  );
};

export default Footer;
