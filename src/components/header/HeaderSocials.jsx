import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/pablo-rodrigo-mendonça-gonçalves-7b3792244/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/pablorodrigo01" target="_blank">
        <BsGithub />
      </a>
      <a href="https://dribbble.com" target="_blank">
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocials;
