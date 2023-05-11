import React from "react";
import ContactImg from "../../assests/img4.jpg";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <img src={ContactImg} alt="/" />
      <div className="overlay" />
      <div className="form-container">
        <form>
          <input />
          <button>send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
