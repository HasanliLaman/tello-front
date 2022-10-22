import TypeProducts from "../models/products";

export const getByCategory = (
  data: TypeProducts.Product[],
  categories: string[]
) => {
  let filtered: TypeProducts.Product[] = data;
  categories.forEach((el) => {
    filtered = [
      ...filtered.filter((element) =>
        element.categories.find((cat) => cat.slug === el)
      ),
    ];
  });
  return filtered;
};
