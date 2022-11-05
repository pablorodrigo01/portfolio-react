import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/devpablorodrigo/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/pablorodrigo01" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
