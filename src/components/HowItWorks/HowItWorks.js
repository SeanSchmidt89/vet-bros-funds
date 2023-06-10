import React from "react";
import HowItWorksImg from "../../assests/img2.jpg";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="howitworks" id="howitworks">
      <img src={HowItWorksImg} alt="/" />
      <div className="overlay" />
      <div className="howitworks-text">
        <div className="mark-container">
          <h1>How It Works</h1>
          <div className="left-mark" />
          <div className="right-mark" />
        </div>

        <p>
          We offer comprehensive solutions for ATMs. We supply the ATM, we
          service it, refill it, and do the installation ourselves. Our ATMs are
          equipped with wireless internet modems, so we won’t have to connect to
          your internet, we just need an outlet for power. Every time the
          customer pulls money from the ATM you will be paid a percentage. The
          more customers that pull-out money from the ATM the more you are
          getting paid and the less you are paying the processing companies
          fees. Additionally, we can install an ATM sign in your window for
          added visibility.
        </p>
      </div>
    </div>
  );
};
// notes to comp
export default HowItWorks;
