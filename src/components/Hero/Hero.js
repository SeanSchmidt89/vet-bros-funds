import React from "react";
import HeroImg from "../../assests/hero.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={HeroImg} alt="/" />
      <div className="overlay" />
      <div className="hero-text">
        <h1>Vet Bros Funds</h1>
        <p>Based in Florida</p>
        <p>Veteran Owned</p>
        <p>
          Vet Bros Funds is an independently owned and operated Service Disabled
          Veteran Owned Small Business (SDVOSB) located in the Greater Tampa Bay
          Area.
        </p>
        <button>button</button>
      </div>
    </div>
  );
};

export default Hero;
