import React from "react";
import cssClasses from "./Header.module.css";

function Header() {
  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.link}>HOME</div>
      <div className={cssClasses.link}>ABOUT ME</div>
      <div className={cssClasses.link}>SKILLS</div>
      <div className={cssClasses.link}>PROJECTS</div>
      <div className={cssClasses.link}>CONTACT</div>
    </div>
  );
}

export default Header;
