import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import StyleProductsPagination from "./style";
import AllProducts from "../AllProducts";

// Example items, to simulate fetching from another resources.
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14,
];

const ProductsPagination: React.FC<{ itemsPerPage: number }> = ({
  itemsPerPage,
}) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

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
