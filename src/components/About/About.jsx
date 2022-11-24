import React from "react";
import cssClasses from "./About.module.css";

function About() {
  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.header}>
        <div className={cssClasses.line}></div>
        About Me
        <div className={cssClasses.line}></div>
      </div>
    </div>
  );
}

export default About;
