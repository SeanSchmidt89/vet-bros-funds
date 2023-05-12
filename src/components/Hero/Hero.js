import React from "react";
import HeroImg from "../../assests/img1.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={HeroImg} alt="/" />
      <div className="overlay" />
      <div className="hero-text">
        <div className="bar-container">
          <div className="top-bar" />
          <div className="bottom-bar" />
        </div>
        <h1>Vet Bros Funds</h1>
        <p>
          Vet Bros Funds is an independently owned and operated Service Disabled
          Veteran Owned Small Business (SDVOSB) located in the Greater Tampa Bay
          Area.
        </p>
        {/* <p>Based in Florida</p>
        <p>Veteran Owned</p> */}
        <a href="#contact">Contect US</a>
      </div>
    </div>
  );
};

export default Hero;
