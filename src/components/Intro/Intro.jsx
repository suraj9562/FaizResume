import React from "react";
import Header from "../Header/Header";
import cssClasses from "./Intro.module.css";

function Intro() {
  return (
    <div className={cssClasses.container}>
      <Header />
      <div className={cssClasses.content}>
        <div className={cssClasses.hi}>HEY THERE!</div>
        <div className={cssClasses.name}>I’M FAIZ SAIYAD</div>
        <div className={cssClasses.profession}>DATA SCIENTIST</div>
        <div className={cssClasses.subtitle}>
          A Data Scientist with experience in Full Stack development using
          Python. Aiming to improve in terms of knowledge in the field of AI
        </div>
        <div className={cssClasses.button}>DOWNLOAD CV</div>
      </div>
    </div>
  );
}

export default Intro;
