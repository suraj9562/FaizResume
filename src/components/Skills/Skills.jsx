import React from "react";
import cssClasses from "./Skills.module.css";

function Skills() {
  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.header}>
        <div className={cssClasses.line}></div>
        Skills
        <div className={cssClasses.line}></div>
      </div>
    </div>
  );
}

export default Skills;
