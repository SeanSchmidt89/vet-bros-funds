import React from "react";
import HeroImg from "../../assests/hero7.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={HeroImg} alt="/" />
      <div className="overlay" />
      <div className="hero-text">
        <h1>Vet Bros Funds</h1>
        <p>
          Vet Bros Funds is an independently owned and operated Service Disabled
          Veteran Owned Small Business (SDVOSB) located in the Greater Tampa Bay
          Area.
        </p>
        {/* <p>Based in Florida</p>
        <p>Veteran Owned</p> */}
        <button>Contect US</button>
      </div>
    </div>
  );
};

export default Hero;
