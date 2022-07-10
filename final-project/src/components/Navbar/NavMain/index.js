import React, { useState, useEffect } from "react";
import Logo from "../../UI/Logo";
import NavAccount from "../NavAccount";
import NavHamburger from "../NavHamburger";
import NavSearch from "../NavSearch";
import Container from "../../UI/Container";
import StyleNavMain from "./style";
import NavList from "../NavList";

const NavMain = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <StyleNavMain open={navOpen}>
      <Container>
        <NavHamburger navOpen={navOpen} setNavOpen={setNavOpen} />
        <Logo />
        <NavSearch className="search" />
        <NavAccount />
        <NavList navOpen={navOpen} />
      </Container>
    </StyleNavMain>
  );
};

export default NavMain;