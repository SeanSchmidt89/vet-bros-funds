import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div>
      <div className="large-nav">
        <a href="#hero">
          <AiOutlineHome size={20} />
        </a>
        <a href="#mail">
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
