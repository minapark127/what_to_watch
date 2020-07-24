import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.scss";

function About() {
  return (
    <div className="about">
      <section className="about__container">
        <span
          className="about__container-icon"
          role="img"
          aria-label="woman technologist"
        >
          👩🏻‍💻
        </span>
        <p>
          My first project with React
          <br />
          ・
          <br />
          Created for learning/practice purposes
        </p>
        <span className="about__container-icon" role="img" aria-label="email">
          📧
        </span>
        <p>mina.park127@gmail.com</p>
        <FontAwesomeIcon
          icon={["fab", "github"]}
          className="about__container-icon"
        />
        <a href="https://github.com/minapark127">
          https://github.com/minapark127
        </a>
        <span
          role="img"
          aria-label="popcorn, clapper board, clinking beer mugs"
        >
          🍿 🎬 🍻
        </span>
      </section>
    </div>
  );
}

export default About;
