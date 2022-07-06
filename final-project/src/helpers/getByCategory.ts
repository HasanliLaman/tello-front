import TypeProducts from "../models/products";

export const getByCategory = function (
  data: TypeProducts.Datum[],
  categories: string[]
) {
  const filteredData = data.filter((el) => {
    const allCat = el.categories.map((cat) => cat.slug).join();
    return allCat.includes(categories.join());
  });
  return filteredData;
};
