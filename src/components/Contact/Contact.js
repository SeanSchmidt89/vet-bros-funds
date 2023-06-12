import React, { useState } from "react";
import ContactImg from "../../assests/img6.jpg";
import "./Contact.css";
const formHandler = (e) => {
  e.preventDefault();
};

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <img src={ContactImg} alt="/" />
      <div className="overlay" />
      <div className="form-container">
        <form className="form-container-two" onSubmit={formHandler}>
          <h1>Contact Us</h1>
          <input placeholder="Name" />
          <textarea placeholder="Message" />
          <button>SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
