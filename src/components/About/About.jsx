import React from "react";
import cssClasses from "./About.module.css";

// assets
import Github from "./../../assets/images/githubBlack.svg";
import Email from "./../../assets/images/gmailBlack.svg";
import LinkedIn from "./../../assets/images/linkedInBlack.svg";

function About() {
  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.header}>
        <div className={cssClasses.line}></div>
        About Me
        <div className={cssClasses.line}></div>
      </div>
      <div className={cssClasses.content}>
        <div className={cssClasses.card}>
          <div className={cssClasses.left}>
            <div className={cssClasses.cardHeader}>
              <div className={cssClasses.name}>Faiz Saiyad</div>
              <div className={cssClasses.subtitle}>
                19, Data Scientist, Problem Solver, Coder
              </div>
            </div>
            <div className={cssClasses.pinpoints}>
              <div className={cssClasses.point}>21+ Personal Projects</div>
              <div className={cssClasses.point}>30+ Github Repositories</div>
              <div className={cssClasses.point}>250+ Linkedin Connections</div>
              <div className={cssClasses.point}>800+ Hours Of Code</div>
            </div>
          </div>
          <div className={cssClasses.right}>
            <img
              src={
                "https://starsunfolded.com/wp-content/uploads/2022/09/Mohammad-Faiz-Picture.jpg"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={cssClasses.icons}>
        <img src={Github} alt="" />
        <img src={Email} alt="" />
        <img src={LinkedIn} alt="" />
      </div>
    </div>
  );
}

export default About;
