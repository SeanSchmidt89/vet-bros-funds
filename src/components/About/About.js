import React from "react";
import AboutImg from "../../assests/img3.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <img src={AboutImg} alt="/" />
      <div className="overlay" />
      <div className="about-text">
        <h1>About Us</h1>
        <p>
          Vet Bros Funds is an independently owned and operated Service Disabled
          Veteran Owned Small Business (SDVOSB) located in the Greater Tampa Bay
          Area.
        </p>
        {/* <p>Based in Florida</p>
        <p>Veteran Owned</p> */}
        <button>button</button>
      </div>
    </div>
  );
};

export default About;
