import React from "react";
import HowItWorksImg from "../../assests/img2.jpg";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <img src={HowItWorksImg} />
      <div className="overlay" />
    </div>
  );
};

export default HowItWorks;
