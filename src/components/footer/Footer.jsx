import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
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
        <a href="https://facebook.com" target="_blank">
          <BsFacebook />
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
