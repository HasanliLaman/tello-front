import React, { useState, useEffect } from "react";
import StyleNavList from "./style";
import dropdown from "../../../assets/images/icon-nav-dropdown.svg";
import NavSubList from "../NavSubList";
import Overlay from "../../UI/Overlay";
import Container from "../../UI/Container";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { fetchCategories } from "../../../slices/categoriesSlice";
import TypeCategories from "../../../models/categories";

type Props = {
  navOpen: boolean;
};

const NavList: React.FC<Props> = ({ navOpen }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [subcategories, setSubcategories] = useState<{
    name: string;
    list: TypeCategories.Child[];
  }>({ name: "", list: [] });

  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const openSubCategory = function (el: any) {
    setSubcategories({ list: el.children, name: el.name });
    setOpen(true && el.children[0]);
  };

  return (
    <>
      <StyleNavList className={navOpen ? "nav-active" : ""}>
        <Container>
          {!data.loading &&
            data.categories.data &&
            data.categories.data.map((el) => (
              <li key={el.id} onMouseEnter={() => openSubCategory(el)}>
                <a href="#">{el.name}</a>
                {el.children[0] && <img src={dropdown} alt="dropdown" />}
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