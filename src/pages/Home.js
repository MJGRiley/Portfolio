import React from "react";
import MJGR from "./assets/images/MJGR.jpg"
import Gmail from "./assets/images/Gmail_400x400.jpg"
import Li from "./assets/images/Linkedin.png"
import "./assets/css/Home.css"


export default function Home() {
  return (
    <div class="wrapper">
      <img class="MJGR" src={MJGR} alt="Morgan Riley"/>
      <h1>Morgan Jon Giles Riley</h1>
      <h3>Full Stack Web Developer</h3>
      <div class="p">
        Motivated Georgia Tech full stack web developer with skills in React,
        Javascript ES6, and SQL/NoSQL databases. Ten year background in
        public-facing tech support and currently focused on agile app
        development and building knowledge base with new technologies. Creative
        problem solver, eager learner and natural helper with honed
        interpersonal skills and talent for leading when required. Eager to use
        technical skills and collaborative nature to write cleaner code,
        identify errors, and help teams develop innovative solutions.
      </div>
      <ul>
        <li><a href="https://github.com/MJGRiley"><img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=60&v=4" alt="GitHub" /></a></li>
        <li><a href="https://www.linkedin.com/in/mjgriley/"><img className="avatar" src={Li}/></a></li>
        <li><a href="mailto:MJGRiley@gmail.com"><img className="avatar" src={Gmail}/></a></li>
      </ul>
    </div>
  );
}
