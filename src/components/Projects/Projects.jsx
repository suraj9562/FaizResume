import React, { useState } from "react";
import Card from "../Card/Card";
import cssClasses from "./Projects.module.css";

function Projects() {
  const [data, setData] = useState([
    "Fully functional Task Management API built to emulate functionality of Todolist API Built using FastAPI and Python Uses PostgreSQL database for data storage Hosted on Heroku",
    "Resume website showcasing projects and skills Built using Flask and Python Hosted on Heroku",
    "Blogging website like Medium with login and authentication Built using Flask, Bootstrap and Python Integrates with SQLite database for data storage",
    "House Price predictor based on Boston dataset Algorithm used: Regression Built using Seaborn, Scikit-Learn, Numpy, Pandas and Pytho",
    "Built simple Neural Network from scratch Character Recognition Model based on the MNIST Handwritten Digit Dataset Built only using Numpy and Maths No Deep learning libraries like Tensorflow, Keras used",
    "Completed the 100 Days of Code Challenge Coded for at least 2 hours per day for 100 days Went from Python beginner to advanced",
    "Calculator application built in FlutterCross platform support courtesy of Flutter Implemented themes of Material Design",
    "Built a GUI Chatroom desktop application Implemented concepts of Socket Programming and Server Client Architecture Built in Python",
    "Analysed the Google Play Store Application dataset Created dashboards in Jupyter Notebook Used Numpy, Pandas, Matplotlib, Seaborn, Plotly and Scikit-Learn libraries",
  ]);

  return (
    <div className={cssClasses.container}>
      <div className={cssClasses.header}>
        <div className={cssClasses.line}></div>
        Projects
        <div className={cssClasses.line}></div>
      </div>
      <div className={cssClasses.content}>
        {data && data.map((val, index) => <Card id={index} data={val} />)}
        {/* <Card
          data={
            "Fully functional Task Management API built to emulate functionality of Todolist APIBuilt using FastAPI and PythonUses PostgreSQL database for data storageHosted on Heroku"
          }
        /> */}
      </div>
    </div>
  );
}

export default Projects;
