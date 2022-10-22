import React, { useState, useEffect, useMemo } from "react";
import StyleProductInfo from "./style";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../models/productInfo";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store";
import {
  addToList,
  removeFromList,
  setLocalStorage,
} from "../../../slices/favoriteSlice";

const ProductInfo: React.FC<{ info: Product }> = ({ info }) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { list } = useSelector((state: RootState) => state.favorites);

  const listMemoized = useMemo(() => list, [list]);

  useEffect(() => {
    if (listMemoized.find((el) => el._id === info._id)) setFavorite(true);
    else setFavorite(false);
  }, [info._id, listMemoized]);

  const addToFavorites = (e) => {
    e.stopPropagation();
    if (list.find((el) => el._id === info._id)) dispatch(removeFromList(info));
    else dispatch(addToList(info));
    dispatch(setLocalStorage());
  };

  const goToProduct = function () {
    navigate(`/products/${info._id}`);
  };

  return (
    <StyleProductInfo onClick={goToProduct} id={info._id} discount={false}>
      <div
        onClick={addToFavorites}
        className={favorite ? "favorite active" : "favorite"}
      >
        <svg
          width="20"
          height="17"
          viewBox="0 0 22 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.22005 2C5.35605 2 4.54605 2.334 3.94005 2.941C2.68205 4.201 2.68205 6.252 3.94105 7.514L11 14.585L18.06 7.514C19.319 6.252 19.319 4.201 18.06 2.941C16.848 1.726 14.712 1.728 13.5 2.941L11.708 4.736C11.332 5.113 10.668 5.113 10.292 4.736L8.50005 2.94C7.89405 2.334 7.08505 2 6.22005 2ZM11 17C10.735 17 10.48 16.895 10.293 16.706L2.52505 8.926C0.489047 6.886 0.489047 3.567 2.52505 1.527C3.50905 0.543 4.82105 0 6.22005 0C7.61905 0 8.93205 0.543 9.91505 1.527L11 2.614L12.085 1.528C13.069 0.543 14.381 0 15.781 0C17.179 0 18.492 0.543 19.475 1.527C21.512 3.567 21.512 6.886 19.476 8.926L11.708 16.707C11.52 16.895 11.266 17 11 17Z"
            fill="#8F9BB3"
          />
        </svg>
      </div>
      <img src={info.image.url} alt="Product" />
      <h3>{info.name}</h3>
      <div>
        {/* <span>
          3012
          <svg
            width="15"
            viewBox="0 0 18 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.59864 1.72768L9.56064 0L8.36507 0.617775L8.33058 1.73493C3.67287 2.19517 0 7.41186 0 13.7837C0 14.1942 0.0151377 14.5996 0.0454132 15H1.67649C1.66119 14.7072 1.65112 14.412 1.65112 14.1134C1.65112 8.33388 4.56783 3.59029 8.28925 3.08269L7.95597 13.9382L9.84851 13.0116L9.62847 3.08482C13.342 3.60411 16.2504 8.34248 16.2504 14.1136C16.2504 14.4122 16.2405 14.7073 16.2251 15.0002H17.9549C17.9848 14.6002 17.9998 14.1948 18.0001 13.7839C17.9999 7.37958 14.2902 2.14163 9.59864 1.72768Z" />
          </svg>
        </span> */}
        <p>
          {info.price}
          <svg
            width="18"
            viewBox="0 0 18 15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.59864 1.72768L9.56064 0L8.36507 0.617775L8.33058 1.73493C3.67287 2.19517 0 7.41186 0 13.7837C0 14.1942 0.0151377 14.5996 0.0454132 15H1.67649C1.66119 14.7072 1.65112 14.412 1.65112 14.1134C1.65112 8.33388 4.56783 3.59029 8.28925 3.08269L7.95597 13.9382L9.84851 13.0116L9.62847 3.08482C13.342 3.60411 16.2504 8.34248 16.2504 14.1136C16.2504 14.4122 16.2405 14.7073 16.2251 15.0002H17.9549C17.9848 14.6002 17.9998 14.1948 18.0001 13.7839C17.9999 7.37958 14.2902 2.14163 9.59864 1.72768Z" />
          </svg>
        </p>
      </div>
    </StyleProductInfo>
  );
};

export default ProductInfo;
