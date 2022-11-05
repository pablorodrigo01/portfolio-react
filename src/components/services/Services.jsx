import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual Communication.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interaction Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Design Tools.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing and debugging.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Frameworks.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version Control.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
