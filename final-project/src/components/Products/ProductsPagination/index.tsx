import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import StyleProductsPagination from "./style";
import AllProducts from "../AllProducts";
import TypeProducts from "../../../models/products";

const ProductsPagination: React.FC<{
  itemsPerPage: number;
  items: TypeProducts.Datum[];
}> = ({ itemsPerPage, items }) => {
  const [currentItems, setCurrentItems] = useState<TypeProducts.Datum[] | null>(
    null
  );

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, items, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <StyleProductsPagination>
      <AllProducts currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="<"
      />
    </StyleProductsPagination>
  );
};

export default ProductsPagination;
