import React, { useEffect } from "react";
import StyleError from "./style";
import Container from "../../components/UI/Container";

const Error = () => {
  useEffect(() => {
    document.title = "Tello | 404";
  }, []);

  return (
    <StyleError>
      <Container>
        <span>404</span>
        <p>Səhifə tapılmadı.</p>
      </Container>
    </StyleError>
  );
};

export default Error;
