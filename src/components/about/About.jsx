import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { BsAwardFill } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";
import { AiFillFolder } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAwardFill className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Study</small>
            </article>
            <article className="about__card">
              <HiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>Open to Work!</small>
            </article>
            <article className="about__card">
              <AiFillFolder className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a velit
            sem. Vivamus vitae semper nunc. Integer efficitur ipsum nec enim
            mattis commodo. Vestibulum tincidunt dui purus, vel aliquam magna
            rhoncus hendrerit. Maecenas id lorem urna.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
