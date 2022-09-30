import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Interactive Rating</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pablorodrigo01/interactive-rating-component"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://interactive-rating-component-frontend.netlify.app"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Netflix Clone</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pablorodrigo01/netflix-clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/pablorodrigo01/netflix-clone"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Digital Clock</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pablorodrigo01/digital-clock"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/pablorodrigo01/digital-clock"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Pokedex</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pablorodrigo01/pokedex"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/pablorodrigo01/pokedex"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Simple CRUD</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/pablorodrigo01/simple_crud"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://github.com/pablorodrigo01/simple_crud"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
