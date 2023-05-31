import React from "react";
import BenefitsImg from "../../assests/img4.jpg";
import { AiOutlineCloseCircle, AiOutlineCheckCircle } from "react-icons/ai";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="benefits" id="benefits">
      <img src={BenefitsImg} alt="/" />
      <div className="overlay" />
      <div className="benefits-text">
        <h1>Benefits</h1>
        <div className="pros-cons-text">
          <div className="atm-machines">
            <h2>ATM Machines</h2>
            <div className="pros-container">
              <span>
                <AiOutlineCheckCircle size={22} />
              </span>
              <p>Earn 25 - 75 Cents per transaction</p>
            </div>
            <div className="pros-container">
              <span>
                <AiOutlineCheckCircle size={22} />
              </span>
              <p>Customers spend 65% more in stores that have ATM Machines</p>
            </div>
            <div className="pros-container">
              <span>
                <AiOutlineCheckCircle size={22} />
              </span>
              <p>
                Reduced Processing Issues, stop paying fees to payment
                processors everytime
              </p>
            </div>
          </div>
          <div className="payment-processors">
            <h2>Payment Processors</h2>
            <div className="cons-container">
              <span>
                <AiOutlineCloseCircle size={20} />
              </span>
              <p>Pay Commissions all the time</p>
            </div>
            <div className="cons-container">
              <span>
                <AiOutlineCloseCircle size={20} />
              </span>
              <p>Customers spend less time and money in the store</p>
            </div>
            <div className="cons-container">
              <span>
                <AiOutlineCloseCircle size={20} />
              </span>
              <p>
                So many hidden fees and charges that the store owner will end up
                paying
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
