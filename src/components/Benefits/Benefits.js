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
        <div>
          <div className="atm-machines">
            <p>ATM Machines</p>
            <p>blah blah</p>
          </div>
          <div className="payment-processors">
            <p>Payment Processors</p>
            <p>blah blah blah</p>
          </div>
        </div>
        <button>button</button>
      </div>
    </div>
  );
};

export default Benefits;
