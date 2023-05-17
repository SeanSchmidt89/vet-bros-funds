import React from "react";
import BenefitsImg from "../../assests/img4.jpg";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="benefits" id="benefits">
      <img src={BenefitsImg} alt="/" />
      <div className="overlay" />
      <div className="benefits-text">
        <h1>Benefits</h1>
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

export default Benefits;
