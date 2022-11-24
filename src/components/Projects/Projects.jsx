import React from "react";
import cssClasses from "./Projects.module.css";

function Projects() {
  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.header}>
        <div className={cssClasses.line}></div>
        Projects
        <div className={cssClasses.line}></div>
      </div>
    </div>
  );
}

export default Projects;
