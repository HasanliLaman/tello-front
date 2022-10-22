import React from "react";
import FilterType from "../FilterType";
import StyleFilterConainer from "./style";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { closeFilter } from "../../../slices/filterSlice";

const FilterContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.filter);

  return (
    <StyleFilterConainer className={data.isOpenFilter ? "active" : ""}>
      <header>
        <svg
          onClick={() => dispatch(closeFilter())}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.41425 6.00001L11.7072 1.70701C12.0982 1.31601 12.0982 0.684006 11.7072 0.293006C11.3162 -0.0979941 10.6842 -0.0979941 10.2933 0.293006L6.00025 4.58601L1.70725 0.293006C1.31625 -0.0979941 0.68425 -0.0979941 0.29325 0.293006C-0.09775 0.684006 -0.09775 1.31601 0.29325 1.70701L4.58625 6.00001L0.29325 10.293C-0.09775 10.684 -0.09775 11.316 0.29325 11.707C0.48825 11.902 0.74425 12 1.00025 12C1.25625 12 1.51225 11.902 1.70725 11.707L6.00025 7.41401L10.2933 11.707C10.4882 11.902 10.7443 12 11.0002 12C11.2562 12 11.5122 11.902 11.7072 11.707C12.0982 11.316 12.0982 10.684 11.7072 10.293L7.41425 6.00001Z"
            fill="#2E3A59"
          />
        </svg>
        Filterləmələr
      </header>
      <div className="filter">
        <FilterType
          id="brand"
          title="Brend"
          list={[
            { name: "Apple", id: "6349a027deb4fa69723b4d6e" },
            { name: "Samsung", id: "63499ed1deb4fa69723b4d6b" },
            { name: "Xiaomi", id: "63499e29deb4fa69723b4d66" },
            { name: "Huawei", id: "63499d820dcd7543dea37b4b" },
          ]}
        />
        {/* <FilterType
          id="category"
          title="Kateqoriya"
          filterArray={categoryArray}
          list={["PC", "Tablet", "Smartphone", "Smartwatch", "Headphones"]}
        /> */}
        {/* <FilterType
          id="color"
          title="Rəng"
          filterArray={useMemo(() => [], [])}
          list={["Black", "White", "Pink", "Purple", "Blue"]}
        /> */}
        <FilterType
          id="price"
          title="Qiymət"
          list={[
            { name: "0-500", id: "0,500" },
            { name: "500-1000", id: "500,1000" },
            { name: "1000-1500", id: "1000,1500" },
            { name: "1500-2000", id: "1500,2000" },
            { name: "2000-2500", id: "2000,2500" },
          ]}
        />
      </div>
    </StyleFilterConainer>
  );
};

export default FilterContainer;
