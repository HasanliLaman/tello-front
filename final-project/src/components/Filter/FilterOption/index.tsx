import React, { useState } from "react";
import StyleFilterOption from "./style";

const FilterOption: React.FC<{ name: string }> = ({ name }) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <StyleFilterOption onClick={() => setChecked(!checked)}>
      <div className={checked ? "checked" : ""}></div>
      <p>{name}</p>
    </StyleFilterOption>
  );
};

export default FilterOption;
