import React from "react";
import HowItWorksImg from "../../assests/img2.jpg";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="howitworks" id="howitworks">
      <img src={HowItWorksImg} />
      <div className="overlay" />
      <div className="howitworks-text">
        <h1>How It Works</h1>
        <p>fjosaidjfoi dsifjoidsaj foisdjfoijasdoif jasdojfoi sadjfiojasd</p>
      </div>
    </div>
  );
};

export default HowItWorks;
