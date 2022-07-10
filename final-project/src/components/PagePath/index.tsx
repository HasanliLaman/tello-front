import React from "react";
import StylePagePath from "./style";
import arrow from "../../assets/images/icon-chevron-right-path.svg";
import Container from "../UI/Container";

const PagePath: React.FC<{ path: string }> = ({ path }) => {
  return (
    <StylePagePath>
      <Container>
        <a href="#">Ana səhifə</a>
        <img src={arrow} alt="arrow" />
        <a href="#">{path}</a>
      </Container>
    </StylePagePath>
  );
};

export default PagePath;
