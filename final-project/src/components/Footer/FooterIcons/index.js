import React from "react";
import StyleFooterIcons from "./style";
import instagram from "../../../assets/images/icon-instagram.svg";
import twitter from "../../../assets/images/icon-twitter.svg";
import facebook from "../../../assets/images/icon-facebook.svg";
import youtube from "../../../assets/images/icon-youtube.svg";
import Logo from "../../UI/Logo";

// TODO: Change <a> with <Link>

const FooterIcons = () => {
  return (
    <StyleFooterIcons>
      <Logo />
      <div className="social-media">
        <a href="#">
          <img src={instagram} alt="icon" />
        </a>
        <a href="#">
          <img src={facebook} alt="icon" />
        </a>
        <a href="#">
          <img src={youtube} alt="icon" />
        </a>
        <a href="#">
          <img src={twitter} alt="icon" />
        </a>
      </div>
    </StyleFooterIcons>
  );
};

export default FooterIcons;
