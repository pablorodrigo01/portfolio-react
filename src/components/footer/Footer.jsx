import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Pablo Rodrigo
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/pablo-rodrigo-mendonça-gonçalves-7b3792244/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/somemelodicplease/" target="_blank">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com/peabeliovishkk" target="_blank">
          <AiFillTwitterCircle />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Pablo Rodrigo. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
