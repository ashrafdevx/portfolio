import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashraf Nasib </span>
            from <span className="purple"> Abbotabbad, Pakistan.</span>
            <br />
            I am currently employed as a software developer at Simplexmed.
            <br />
            I completed my Bachelor's degree in Software Engineering in 2020
            from Islamia College University, Peshawar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading field related Article
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you’re truly serious about your goals, lose track of time while
            working hard to achieve them.!"{" "}
          </p>
          <footer className="blockquote-footer">Ash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
