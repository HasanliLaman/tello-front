import React, { useState } from "react";
import StyleNavList from "./style";
import dropdown from "../../../assets/images/icon-nav-dropdown.svg";
import NavSubList from "../NavSubList";
import Overlay from "../../UI/Overlay";
import Container from "../../UI/Container";

const NavList = ({ navOpen }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyleNavList className={navOpen ? "nav-active" : ""}>
        <Container>
          <li onClick={() => setOpen(!open)}>
            <a href="#">Yenii</a>
            <img src={dropdown} alt="dropdown" />
          </li>
          <li>
            <a href="#">Yeni</a>
            <img src={dropdown} alt="dropdown" />
          </li>
          <li>
            <a href="#">Yeni</a>
          </li>
          <li>
            <a href="#">Yeni</a>
          </li>
          <li>
            <a href="#">Yeni</a>
          </li>
          <li>
            <a href="#">Yeni</a>
          </li>
        </Container>
        <NavSubList open={open} setOpen={setOpen} />
      </StyleNavList>
      {open && <Overlay />}
    </>
  );
};

export default NavList;
