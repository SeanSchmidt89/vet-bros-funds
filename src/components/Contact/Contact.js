import React, { useState } from "react";
import ContactImg from "../../assests/img6.jpg";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [validation, setValidation] = useState(false);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const numberHandler = (e) => {
    setNumber(e.target.value);
  };

  const messageHandler = (e) => {
    setMessage(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    setName("");
    setNumber("");
    setMessage("");
    setValidation(true);
    console.log(name, number, message);
  };
  return (
    <div className="contact" id="contact">
      <img src={ContactImg} alt="/" />
      <div className="overlay" />
      <div className="form-container">
        <form className="form-container-two" onSubmit={formHandler}>
          <h1>Contact Us</h1>
          <input onChange={nameHandler} value={name} placeholder="Name" />
          <input onChange={numberHandler} value={number} placeholder="Number" />
          <textarea
            onChange={messageHandler}
            value={message}
            placeholder="Message"
          />
          <button>SEND MESSAGE</button>
          {validation ? <p className="validation">Mesage Sent</p> : null}
        </form>
      </div>
    </div>
  );
};

export default Contact;
