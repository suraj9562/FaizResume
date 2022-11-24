import React from "react";
import cssClasses from "./Navigator.module.css";

// assets
import About from "./../../assets/images/aboutme.svg";
import Skills from "./../../assets/images/skills.svg";
import Projects from "./../../assets/images/projects.svg";

function Navigator() {
  return (
    <div className={cssClasses.container}>
      <img src={About} alt="" />
      <img src={Skills} alt="" />
      <img src={Projects} alt="" />
    </div>
  );
}

export default Navigator;
