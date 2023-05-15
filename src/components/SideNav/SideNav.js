import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div>
      <div className="large-nav">
        <a href="#hero">
          <AiOutlineHome size={20} />
        </a>
        <a href="#benefits">
          <GiProgression size={20} />
        </a>
        <a href="#contact">
          <AiOutlineMail size={20} />
        </a>
        <a href="#about">
          <GrDocumentText size={20} />
        </a>
      </div>
    </div>
  );
};

export default SideNav;
