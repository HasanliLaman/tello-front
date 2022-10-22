import React, { useState, useEffect } from "react";
import StyleNavList from "./style";
import dropdown from "../../../assets/images/icon-nav-dropdown.svg";
import NavSubList from "../NavSubList";
import Overlay from "../../UI/Overlay";
import Container from "../../UI/Container";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { fetchCategories } from "../../../asyncThunk";
import { updateQuery } from "../../../slices/filterSlice";
import TypeCategories from "../../../models/categories";
import { NavLink } from "react-router-dom";

type Props = {
  navOpen: boolean;
};

const NavList: React.FC<Props> = ({ navOpen }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [subcategories, setSubcategories] = useState<{
    name: string;
    list: TypeCategories.Subcategory[];
  }>({ name: "", list: [] });

  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const openSubCategory = function (el: TypeCategories.Category) {
    setSubcategories({ list: el.subcategories, name: el.name });
    setOpen(true && Boolean(el.subcategories.length));
  };

  return (
    <>
      <StyleNavList className={navOpen ? "nav-active" : ""}>
        <Container>
          {data.categories.data &&
            data.categories.data.categories &&
            data.categories.data.categories.map((el) => (
              <li key={el._id} onMouseEnter={() => openSubCategory(el)}>
                <NavLink
                  onClick={() => {
                    dispatch(
                      updateQuery({ field: "categories", value: el._id })
                    );
                  }}
                  to={`/products`}
                >
                  {el.name}
                </NavLink>
                {el.subcategories[0] && <img src={dropdown} alt="dropdown" />}
              </li>
            ))}
        </Container>

        <NavSubList items={subcategories} open={open} setOpen={setOpen} />
      </StyleNavList>
      {open && <Overlay />}
    </>
  );
};

export default NavList;
