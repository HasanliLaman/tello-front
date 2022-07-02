import React from "react";
import StyleFooterList from "./style";
import { Link } from "react-router-dom";

// TODO: replace <a> with <Link>

const index = ({ list }) => {
  return (
    <StyleFooterList>
      {list.map((el) => (
        <li key={el.name}>
          <a href="#">{el.name}</a>
        </li>
      ))}
    </StyleFooterList>
  );
};

export default index;
