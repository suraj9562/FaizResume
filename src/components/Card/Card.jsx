import React from "react";
import cssClasses from "./Card.module.css";

function Card({ data }) {
  return <div className={cssClasses.container}>{data}</div>;
}

export default Card;
