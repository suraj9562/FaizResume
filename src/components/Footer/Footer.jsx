import React from "react";
import cssClasses from "./Footer.module.css";

// assets
import Phone from "./../../assets/images/phone.svg";
import Email from "./../../assets/images/email.svg";
import Github from "./../../assets/images/github.svg";
import LinkedIn from "./../../assets/images/linkedIn.svg";

function Footer() {
  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.heading}>CONTACT</div>
      <div className={cssClasses.secondLine}>
        <div className={cssClasses.text}>
          <img src={Phone} alt="" />
          +91 8177941560
        </div>
        <div className={cssClasses.verticalLine}></div>
        <div className={cssClasses.text}>
          <img src={Email} alt="" /> fsaiyad990@gmail.com
        </div>
        <div className={cssClasses.verticalLine}></div>
        <div className={cssClasses.text}>
          <img src={Phone} alt="" />
          faizsaiyad.xyz
        </div>
      </div>
      <div className={cssClasses.text}>
        <img src={Github} alt="" />
        Github: https://github.com/Enhancifire
      </div>
      <div className={cssClasses.text}>
        <img src={LinkedIn} alt="" />
        LinkedIn: linkedin.com/in/mohammad-faiz-saiyad-295250204/
      </div>
    </div>
  );
}

export default Footer;
