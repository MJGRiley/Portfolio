import React from "react";
import beecomingMe from "./assets/images/BeecomingMe.png";
import noteTaker from "./assets/images/NoteTaker.png";
import offlineBudget from "./assets/images/OfflineBudget.png";
import pwgen from "./assets/images/pwgen.png";
import WDWMWT from "./assets/images/WDWMWT.png";
import weatherDashboard from "./assets/images/WeatherDashboard.png";
import workDayScheduler from "./assets/images/WorkDayScheduler.png";
import Card from "react-bootstrap/Card";
import "./assets/css/Portfolio.css";

export default function Portfolio() {
  return (
    <div classname="container">

      <ul className="row">
        {/* <li className="col"
      <Card style={{ width: "18rem" }}>
        <a href="TODO:">
          <Card.Img variant="top" src={TODO:} alt="TODO:" />
        </a>
        <Card.Body>
          <Card.Title>TODO:</Card.Title>
          <Card.Text>TODO:</Card.Text>
        </Card.Body>
      </Card> 
      </li>*/}
        <li className="col">
          <Card style={{ width: "18rem" }}>
            <a href="http://beecomingme.com">
              <Card.Img variant="top" src={beecomingMe} alt="BeecomingMe" />
            </a>
            <Card.Body>
              <Card.Title>BeecomingMe - <a href="https://github.com/courtbourt12/beecomingme"><img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=60&v=4" alt="GitHub" /></a></Card.Title>
              <Card.Text>
                Beecoming Me allows its users to create, break-down, and track
                goals in a mobile-first designed platform. The main feature of
                this web application is the user can add an accountability
                partner so they have support with their goals.
                <h6>
                  <strong>Features:</strong>
                </h6>
                User authentication, password hashing, final product will be CRUD
                <h6>
                  <strong>Technologies Used:</strong>
                </h6>
                MERN, Apollo GraphQL, SCSS, Bootstrap, deployed to Heroku using
                MongoDB Atlas with a custom domain.
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li className="col">
          <Card style={{ width: "18rem" }}>
            <a href="http://magical-wait-times.herokuapp.com/">
              <Card.Img variant="top" src={WDWMWT} alt="Magical Wait Times" />
            </a>
            <Card.Body>
              <Card.Title>Magical Wait Times - <a href="https://github.com/MJGRiley/Magical-Wait-Times"><img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=60&v=4" alt="GitHub" /></a></Card.Title>
              <Card.Text>
                After login or Register the user is taken to a map of Walt Disney World to select which land they would like to check out.
                Each land page has a list of its rides and each has the current wait time next to it. Users can leave their experience about 
                <h6>
                  <strong>Features:</strong>
                </h6>
                MVC structure, area selection on an image, 
                <h6>
                  <strong>Technologies Used:</strong>
                </h6>
                Node.js, Express.js, Handlebars, Javascript, Sequelize, bcrypt, cloudinary, heroku.
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li className="col">
          <Card style={{ width: "18rem" }}>
            <a href="https://mjgriley.github.io/Weather-Dashboard/">
              <Card.Img
                variant="top"
                src={weatherDashboard}
                alt="Weather Dashboard"
              />
            </a>
            <Card.Body>
              <Card.Title>Weather Dashboard - <a href="https://github.com/MJGRiley/Weather-Dashboard"><img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=60&v=4" alt="GitHub" /></a></Card.Title>
              <Card.Text>
                Searches Open Weather API for user Input city name. Displays 5
                day forecast & current day
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li className="col">
          <Card style={{ width: "18rem" }}>
            <a href="https://mjgriley.github.io/Work-Day-Scheduler/">
              <Card.Img
                variant="top"
                src={workDayScheduler}
                alt="Work Day Scheduler"
              />
            </a>
            <Card.Body>
              <Card.Title>Work Day Scheduler - <a href="https://github.com/MJGRiley/Work-Day-Scheduler"><img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=60&v=4" alt="GitHub" /></a></Card.Title>
              <Card.Text>
                User is presented with a schedule including 9 text inputs, one
                for each hour; date at the top. The text input fields change
                color with the hour to keep the user on track. This website will
                save the user's schedule they've input when the blue save icon
                is clicked. It maintains a copy on local storage incase they
                close the window and need to come back to it.
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li className="col">
          <Card style={{ width: "18rem" }}>
            <a href="https://github.com/MJGRiley/Offline-Budget-Tracker">
              <Card.Img
                variant="top"
                src={offlineBudget}
                alt="Offline Budget Tracker"
              />
            </a>
            <Card.Body>
              <Card.Title>Offline Budget Tracker - <a href="https://github.com/MJGRiley/Offline-Budget-Tracker"><img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=60&v=4" alt="GitHub" /></a></Card.Title>
              <Card.Text>
                AS AN avid traveller I WANT to be able to track my withdrawals
                and deposits with or without a data/internet connection SO THAT
                I know how much money I have to spend
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li className="col">
          <Card style={{ width: "18rem" }}>
            <a href="https://note-taker-mjgr.herokuapp.com/">
              <Card.Img variant="top" src={noteTaker} alt="Note Taker" />
            </a>
            <Card.Body>
              <Card.Title>Express Note Taker - <a href="https://github.com/MJGRiley/Note-Taker"><img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=60&v=4" alt="GitHub" /></a></Card.Title>
              <Card.Text>
                This site is a virtual notepad. Click to enter and notes will be
                saved to a database. Notes will be loaded from the last session.
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
        <li className="col">
          <Card style={{ width: "18rem" }}>
            <a href="https://mjgriley.github.io/Password-Generator/">
              <Card.Img variant="top" src={pwgen} alt="Password Generator" />
            </a>
            <Card.Body>
              <Card.Title>Password Generator - <a href="https://github.com/MJGRiley/Password-Generator"><img className="avatar" src="https://avatars.githubusercontent.com/u/9919?s=60&v=4" alt="GitHub" /></a></Card.Title>
              <Card.Text>
                At button click prompt the user for length of password desired.
                Prompt user which characters to inclue: Uppercase, Lowercase,
                Numbers, Special Generates characters from types of characters
                selected at desired length.
              </Card.Text>
            </Card.Body>
          </Card>
        </li>
      </ul>
    </div>
  );
}
