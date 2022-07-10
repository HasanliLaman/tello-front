import React, { useState } from "react";
import FilterOption from "../FilterOption";
import StyleFilterType from "./style";

const FilterType: React.FC<{ title: string; list: string[] }> = ({
  title,
  list,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StyleFilterType open={open}>
      <header onClick={() => setOpen(!open)}>
        <p>{title}</p>
        <div className="icon">
          <div></div>
          <div></div>
        </div>
      </header>
      {open && (
        <ul>
          {list.map((el) => (
            <FilterOption name={el} key={el} />
          ))}
        </ul>
      )}
    </StyleFilterType>
  );
};

export default FilterType;
