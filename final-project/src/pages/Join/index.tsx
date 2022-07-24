import React from "react";
import { Outlet } from "react-router-dom";
import JoinImage from "../../components/Join/JoinImage";
import Container from "../../components/UI/Container";
import StyleJoin from "./style";

const Join = () => {
  return (
    <StyleJoin>
      <Container>
        <Outlet />
        <JoinImage />
      </Container>
    </StyleJoin>
  );
};

export default Join;
