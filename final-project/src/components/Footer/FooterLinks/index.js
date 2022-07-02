import React from "react";
import StyleFooterLinks from "./style";
import FooterContact from "../FooterContact";
import FooterList from "../FooterList";

const FooterLinks = (props) => {
  return (
    <StyleFooterLinks>
      <h2>{props.header}</h2>
      {props.links && <FooterList list={props.items} />}
      {!props.links && <FooterContact />}
    </StyleFooterLinks>
  );
};

export default FooterLinks;
