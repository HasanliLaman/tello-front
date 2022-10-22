import React, { useEffect, useState } from "react";
import StyleFilterOption from "./style";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { updateQuery } from "../../../slices/filterSlice";

interface Props {
  name: string;
  id: string;
  value: string;
}

const FilterOption: React.FC<Props> = ({ name, id, value }) => {
  const [checked, setChecked] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { query } = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    if (
      query.includes(value) ||
      (query.includes(`price[gte]=${value.split(",")[0]}`) &&
        query.includes(`price[lte]=${value.split(",")[1]}`))
    ) {
      setChecked(true);
    } else setChecked(false);
  }, [query, value]);

  return (
    <StyleFilterOption
      onClick={() => {
        if (id === "brand")
          dispatch(updateQuery({ field: "categories", value }));
        if (id === "price") {
          dispatch(
            updateQuery({ field: "price[lte]", value: value.split(",")[1] })
          );
          dispatch(
            updateQuery({ field: "price[gte]", value: value.split(",")[0] })
          );
        }
      }}
    >
      <div className={checked ? "checked" : ""}></div>
      <p>{name}</p>
    </StyleFilterOption>
  );
};

export default FilterOption;
