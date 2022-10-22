import React from "react";
import StyleFooterList from "./style";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { updateQuery } from "../../../slices/filterSlice";
import { Link } from "react-router-dom";

const FooterList: React.FC<{
  list: { name: string; id: string }[];
  base: string;
}> = ({ list, base }) => {
  const dispatch = useDispatch<AppDispatch>();
  const goToCategory = function (id: string) {
    dispatch(updateQuery({ field: "categories", value: id }));
  };

  return (
    <StyleFooterList>
      {list.map((el) => (
        <li key={el.name}>
          <Link onClick={() => goToCategory(el.id)} to={`/${base}`}>
            {el.name}
          </Link>
        </li>
      ))}
    </StyleFooterList>
  );
};

export default FooterList;
