import TypeProducts from "../models/products";

export const getByCategory = (
  data: TypeProducts.Datum[],
  categories: string[]
) =>
  data.filter((el) =>
    el.categories
      .map((cat) => cat.slug)
      .join()
      .includes(categories.join())
  );
