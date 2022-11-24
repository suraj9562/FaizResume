import React from "react";
import Header from "../Header/Header";
import cssClasses from "./Intro.module.css";

function Intro() {
  return (
    <div className={cssClasses.container}>
      <Header />
    </div>
  );
}

export default Intro;
