import React from "react";
import StylePartnersItem from "./style";

const PartnersItem = ({ img }) => {
  return (
    <StylePartnersItem>
      <img src={img} alt="partner" />
    </StylePartnersItem>
  );
};

export default PartnersItem;
