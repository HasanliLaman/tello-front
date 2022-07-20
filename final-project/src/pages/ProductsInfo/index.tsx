import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ChangeToComments from "../../components/Comments/ChangeToComments";
import PagePath from "../../components/PagePath";
import MainContainer from "../../components/ProductDetails/ProductInfo/MainContainer";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import { fetchProduct } from "../../slices/productSlice";

const ProductsInfo = () => {
  const { productId } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {data.product.id && (
        <>
          <PagePath path={data.product.name} />
          <MainContainer />
          <ChangeToComments />
        </>
      )}
    </div>
  );
};

export default ProductsInfo;
